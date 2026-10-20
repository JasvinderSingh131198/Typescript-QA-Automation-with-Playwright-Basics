// Import helpers to define config and a built-in browser device profile
import { defineConfig, devices } from "@playwright/test";

// Export the configuration Playwright reads automatically
export default defineConfig({
  testDir: "./tests", // folder containing the test files
  retries: 1, // retry a failed test once to reduce flaky failures
  reporter: "list", // print one line per test in the terminal
  use: { baseURL: "https://playwright.dev" }, // lets tests call page.goto("/")
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }], // run in Chrome
});
