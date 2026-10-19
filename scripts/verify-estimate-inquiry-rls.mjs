/**
 * Real PostgreSQL role-access proof via Docker (no npm pg dependency).
 * Starts an ephemeral Postgres 15 container, applies inquiry migrations, runs role checks.
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
];

function run(cmd, args, opts = {}) {
  const res = spawnSync(cmd, args, {
    encoding: "utf8",
    shell: false,
    ...opts,
  });
  return res;
}

function docker(...args) {
  return run("docker", args);
}

function psql(sql) {
  return docker(
    "exec",
    "-i",
    container,
    "psql",
    "-U",
    "postgres",
    "-v",
    "ON_ERROR_STOP=1",
    "-c",
    sql,
  );
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

const checks = psqlFile(path.join(root, "scripts/verify-estimate-inquiry-rls.sql"));
process.stdout.write(checks.stdout || "");
if (checks.stderr) process.stderr.write(checks.stderr);

cleanup();
process.exit(checks.status ?? 1);
