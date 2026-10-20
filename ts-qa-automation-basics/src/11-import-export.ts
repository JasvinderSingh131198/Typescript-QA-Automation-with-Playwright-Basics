// Default import (no braces) + named imports (braces) from another file
import Logger, { BASE_URL, formatTestName } from "./utils/helpers";

// Use the imported named function
const name = formatTestName(7, "Open home page");
// Use the imported default class and its static method
Logger.info(name); // [INFO] TC-007: Open home page
// Use the imported constant
Logger.info(`Base URL is ${BASE_URL}`); // [INFO] Base URL is https://playwright.dev

// Export this file's own function so other files can import it
export function add(a: number, b: number): number {
  return a + b; // simple reusable logic
}
