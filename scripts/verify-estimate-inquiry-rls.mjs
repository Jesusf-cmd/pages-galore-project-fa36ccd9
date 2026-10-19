/**
 * Real PostgreSQL role-access proof via Docker (no npm pg dependency).
 * 1) Apply inquiry migrations and run restrictive RLS checks (must pass).
 * 2) Introduce a permissive negative control and prove the same denial check fails.
 * Discards the disposable container afterward. Never for production.
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const container = process.env.FDZ_RLS_CONTAINER || "fdz-inquiry-rls-verify";
const migrations = [
  "supabase/migrations/20261019000000_estimate_inquiries.sql",
  "supabase/migrations/20261019120000_estimate_inquiry_notifications.sql",
  "supabase/migrations/20261019140000_estimate_inquiry_notification_claims.sql",
];

function docker(...args) {
  return spawnSync("docker", args, { encoding: "utf8" });
}

function psql(sql) {
  return docker("exec", "-i", container, "psql", "-U", "postgres", "-v", "ON_ERROR_STOP=1", "-c", sql);
}

function psqlFile(filePath) {
  const sql = fs.readFileSync(filePath, "utf8");
  return spawnSync(
    "docker",
    ["exec", "-i", container, "psql", "-U", "postgres", "-v", "ON_ERROR_STOP=1"],
    { input: sql, encoding: "utf8" },
  );
}

function cleanup() {
  docker("rm", "-f", container);
}

cleanup();
const start = docker(
  "run",
  "-d",
  "--name",
  container,
  "-e",
  "POSTGRES_PASSWORD=postgres",
  "postgres:15-alpine",
);
if (start.status !== 0) {
  console.error(start.stderr || start.stdout);
  process.exit(start.status ?? 1);
}

let ready = false;
for (let i = 0; i < 30; i++) {
  const ping = docker("exec", container, "pg_isready", "-U", "postgres");
  if (ping.status === 0) {
    ready = true;
    break;
  }
  spawnSync(process.platform === "win32" ? "timeout" : "sleep", process.platform === "win32" ? ["/t", "1"] : ["1"], {
    shell: true,
  });
}
if (!ready) {
  console.error("Postgres container did not become ready");
  cleanup();
  process.exit(1);
}

const roles = psql(`
DO $$ BEGIN CREATE ROLE anon NOLOGIN; EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE ROLE authenticated NOLOGIN; EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE ROLE service_role NOLOGIN BYPASSRLS; EXCEPTION WHEN duplicate_object THEN NULL; END $$;
GRANT USAGE ON SCHEMA public TO anon, authenticated, service_role;
-- Mimic Supabase production-style defaults: new functions receive EXECUTE for API roles.
-- Plain PostgreSQL only grants PUBLIC; REVOKE FROM PUBLIC alone is insufficient here.
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public
  GRANT EXECUTE ON FUNCTIONS TO anon, authenticated, service_role;
`);
if (roles.status !== 0) {
  console.error("Failed to create local roles");
  console.error(roles.stderr || roles.stdout);
  cleanup();
  process.exit(roles.status ?? 1);
}

for (const rel of migrations) {
  const applied = psqlFile(path.join(root, rel));
  if (applied.status !== 0) {
    console.error(`Migration failed: ${rel}`);
    console.error(applied.stderr || applied.stdout);
    cleanup();
    process.exit(applied.status ?? 1);
  }
  console.log(`Applied ${rel}`);
}

console.log("\n=== POSITIVE RLS CHECKS (restrictive schema) ===");
const positive = psqlFile(path.join(root, "scripts/verify-estimate-inquiry-rls.sql"));
process.stdout.write(positive.stdout || "");
if (positive.stderr) process.stderr.write(positive.stderr);
if (positive.status !== 0) {
  console.error("Positive RLS verification failed");
  cleanup();
  process.exit(positive.status ?? 1);
}

console.log("\n=== NEGATIVE CONTROL (permissive access must fail denial check) ===");
const negSetup = psqlFile(path.join(root, "scripts/verify-estimate-inquiry-rls-negative.sql"));
process.stdout.write(negSetup.stdout || "");
if (negSetup.stderr) process.stderr.write(negSetup.stderr);
if (negSetup.status !== 0) {
  console.error("Negative control setup failed");
  cleanup();
  process.exit(negSetup.status ?? 1);
}

const negCheck = psql(`
DO $$
DECLARE
  n int;
BEGIN
  SET LOCAL ROLE authenticated;
  SELECT count(*) INTO n FROM public.estimate_inquiries;
  RESET ROLE;
  -- Under restrictive schema this must be 0 / denied. After negative control, n >= 1.
  -- The "returns no rows" assertion must therefore FAIL.
  IF n = 0 THEN
    RAISE EXCEPTION 'negative control did not expose rows (n=0)';
  END IF;
  RAISE EXCEPTION 'NEGATIVE_CONTROL_VERIFIER_FAILED authenticated_visible=% — expected denial/zero under restrictive policy', n;
END $$;
`);
process.stdout.write(negCheck.stdout || "");
if (negCheck.stderr) process.stderr.write(negCheck.stderr);

const negFailedAsExpected =
  negCheck.status !== 0 &&
  /NEGATIVE_CONTROL_VERIFIER_FAILED/i.test(`${negCheck.stdout || ""}${negCheck.stderr || ""}`);

if (!negFailedAsExpected) {
  console.error("Negative control did not fail the verifier as required");
  cleanup();
  process.exit(1);
}
console.log("PASS  negative control: permissive authenticated SELECT caused verifier failure");

cleanup();
console.log("\nAll RLS positive checks passed; negative control failed as required.");
process.exit(0);
