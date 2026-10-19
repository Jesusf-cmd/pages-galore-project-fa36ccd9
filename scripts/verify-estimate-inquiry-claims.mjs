/**
 * Real PostgreSQL concurrency proof for notification claims (Docker).
 * Two parallel claim RPCs for one notification: exactly one wins.
 */
import { spawn, spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const container = process.env.FDZ_CLAIM_CONTAINER || "fdz-inquiry-claim-verify";
const migrations = [
  "supabase/migrations/20261019000000_estimate_inquiries.sql",
  "supabase/migrations/20261019120000_estimate_inquiry_notifications.sql",
  "supabase/migrations/20261019140000_estimate_inquiry_notification_claims.sql",
];

function docker(...args) {
  return spawnSync("docker", args, { encoding: "utf8" });
}

function psqlFile(filePath) {
  const sql = fs.readFileSync(filePath, "utf8");
  return spawnSync(
    "docker",
    ["exec", "-i", container, "psql", "-U", "postgres", "-v", "ON_ERROR_STOP=1"],
    { input: sql, encoding: "utf8" },
  );
}

function psql(sql) {
  return docker("exec", "-i", container, "psql", "-U", "postgres", "-v", "ON_ERROR_STOP=1", "-t", "-A", "-c", sql);
}

function claimOnce(notificationId, token) {
  return new Promise((resolve) => {
    const child = spawn(
      "docker",
      [
        "exec",
        "-i",
        container,
        "psql",
        "-U",
        "postgres",
        "-t",
        "-A",
        "-c",
        `SELECT CASE WHEN public.claim_estimate_inquiry_notification('${notificationId}'::uuid, '${token}'::uuid, 120) IS NULL THEN 'miss' ELSE 'win' END;`,
      ],
      { encoding: "utf8" },
    );
    let out = "";
    child.stdout.on("data", (d) => {
      out += d.toString();
    });
    child.stderr.on("data", (d) => {
      out += d.toString();
    });
    child.on("close", () => resolve(out.trim().split("\n").pop()));
  });
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
  process.exit(1);
}

let ready = false;
for (let i = 0; i < 40; i++) {
  if (docker("exec", container, "pg_isready", "-U", "postgres").status === 0) {
    ready = true;
    break;
  }
  spawnSync(process.platform === "win32" ? "timeout" : "sleep", process.platform === "win32" ? ["/t", "1"] : ["1"], {
    shell: true,
  });
}
if (!ready) {
  console.error("Postgres claim container not ready");
  cleanup();
  process.exit(1);
}

const roleSetup = psql(`
DO $$ BEGIN CREATE ROLE anon NOLOGIN; EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE ROLE authenticated NOLOGIN; EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE ROLE service_role NOLOGIN BYPASSRLS; EXCEPTION WHEN duplicate_object THEN NULL; END $$;
GRANT USAGE ON SCHEMA public TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public
  GRANT EXECUTE ON FUNCTIONS TO anon, authenticated, service_role;
`);
if (roleSetup.status !== 0) {
  console.error("Failed to create roles", roleSetup.stderr || roleSetup.stdout);
  cleanup();
  process.exit(1);
}

for (const rel of migrations) {
  const applied = psqlFile(path.join(root, rel));
  if (applied.status !== 0) {
    console.error(applied.stderr || applied.stdout);
    cleanup();
    process.exit(1);
  }
}

const seed = psql(`
SELECT (public.create_estimate_inquiry_with_notifications(
  jsonb_build_object(
    'customer_name', 'Claim Fixture',
    'customer_email', 'claim@example.com',
    'customer_phone', '3165550122',
    'project_type', 'commercial',
    'status', 'inquiry'
  ),
  'ops@example.com'
))->>'customer_notification_id';
`);
const notificationId = (seed.stdout || "").trim();
if (!/^[0-9a-f-]{36}$/i.test(notificationId)) {
  console.error("Failed to seed notification id", seed);
  cleanup();
  process.exit(1);
}
console.log("Seeded notification", notificationId);

const tokenA = "11111111-1111-4111-8111-111111111111";
const tokenB = "22222222-2222-4222-8222-222222222222";

const [a, b] = await Promise.all([
  claimOnce(notificationId, tokenA),
  claimOnce(notificationId, tokenB),
]);
console.log("Parallel claim results:", { a, b });
const wins = [a, b].filter((x) => x === "win").length;
const misses = [a, b].filter((x) => x === "miss").length;
if (!(wins === 1 && misses === 1)) {
  console.error("FAIL expected exactly one parallel claim win", { a, b });
  cleanup();
  process.exit(1);
}
console.log("PASS  parallel claims: exactly one win");

const state = psql(
  `SELECT attempt_count || '|' || coalesce(claim_token::text,'') FROM public.estimate_inquiry_notifications WHERE id = '${notificationId}'::uuid;`,
);
const [attemptStr, owner] = (state.stdout || "").trim().split("|");
if (Number(attemptStr) !== 1 || (owner !== tokenA && owner !== tokenB)) {
  console.error("FAIL owner/attempt after parallel claim", state.stdout);
  cleanup();
  process.exit(1);
}
console.log("PASS  attempt_count=1 with single owner", owner);

function lastLine(stdout) {
  return (stdout || "")
    .trim()
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean)
    .pop();
}

psql(`
UPDATE public.estimate_inquiry_notifications
SET claim_expires_at = now() - interval '1 second'
WHERE id = '${notificationId}'::uuid;
`);
const recoverOwner = tokenA === owner ? tokenB : tokenA;
const recover = psql(
  `SELECT CASE WHEN public.claim_estimate_inquiry_notification('${notificationId}'::uuid, '${recoverOwner}'::uuid, 120) IS NULL THEN 'miss' ELSE 'win' END;`,
);
if (lastLine(recover.stdout) !== "win") {
  console.error("FAIL abandoned claim recovery", recover);
  cleanup();
  process.exit(1);
}
console.log("PASS  abandoned claim recovered");

const staleToken = owner;
const currentOwner = recoverOwner;
const stale = psql(`
SELECT public.finalize_estimate_inquiry_notification(
  '${notificationId}'::uuid,
  '${staleToken}'::uuid,
  1,
  'provider_accepted',
  NULL,
  'msg_stale'
);
`);
if (lastLine(stale.stdout) !== "f") {
  console.error("FAIL stale finalize should be rejected", stale);
  cleanup();
  process.exit(1);
}
console.log("PASS  stale worker finalize rejected");

const ok = psql(`
SELECT public.finalize_estimate_inquiry_notification(
  '${notificationId}'::uuid,
  '${currentOwner}'::uuid,
  2,
  'provider_accepted',
  NULL,
  'msg_ok'
);
`);
if (lastLine(ok.stdout) !== "t") {
  console.error("FAIL current claim finalize", ok);
  cleanup();
  process.exit(1);
}
console.log("PASS  current claim finalize accepted");

cleanup();
console.log("All claim concurrency checks passed.");
process.exit(0);
