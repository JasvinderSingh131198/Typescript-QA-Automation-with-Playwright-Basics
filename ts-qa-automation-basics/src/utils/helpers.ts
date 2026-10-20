// Named export: a reusable function other files can import
export function formatTestName(id: number, title: string): string {
  // Template literal builds "TC-001: Login works"
  return `TC-${String(id).padStart(3, "0")}: ${title}`;
}

// Named export: a constant shared across files
export const BASE_URL = "https://playwright.dev";

// Default export: only one allowed per file
export default class Logger {
  // Static method: call it without creating an object
  static info(message: string): void {
    // Print a prefixed log line
    console.log(`[INFO] ${message}`);
  }
}
