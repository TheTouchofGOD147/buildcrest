import assert from "node:assert/strict";
import { spawn } from "node:child_process";

const port = 19371;
const base = `http://127.0.0.1:${port}`;

const child = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", "start", "-p", String(port)],
  {
    stdio: "ignore",
    windowsHide: true,
  },
);

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    if (child.exitCode !== null) {
      throw new Error("Test server exited unexpectedly.");
    }

    try {
      const response = await fetch(`${base}/api/contact`);
      if (response.status === 405) return;
    } catch {
      // Server may still be starting.
    }

    await new Promise(resolve => setTimeout(resolve, 500));
  }

  throw new Error("Test server did not start.");
}

async function post(body, contentType = "application/json") {
  return fetch(`${base}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": contentType },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

try {
  await waitForServer();

  const valid = {
    fullName: "Test Client",
    email: "test@example.com",
    phone: "",
    inquiryType: "General Inquiry",
    message: "This is a valid test construction inquiry.",
    website: "",
  };

  const missing = await post({ ...valid, email: "" });
  assert.equal(missing.status, 400);

  const invalid = await post("{invalid");
  assert.equal(invalid.status, 400);

  const spam = await post({
    ...valid,
    website: "spam.example",
  });
  assert.equal(spam.status, 400);

  const accepted = await post(valid);
  assert.equal(accepted.status, 503);
  assert.equal((await accepted.json()).success, false);

  const wrongType = await post("hello", "text/plain");
  assert.equal(wrongType.status, 415);

  console.log("CONTACT API TESTS PASSED");
  console.log("Validation passed; SMTP-disabled requests fail closed.");
} finally {
  child.kill();
}