// Type alias: a custom name for a type
type TestId = number | string;

// Literal union: only these exact values are allowed
type BrowserName = "chromium" | "firefox" | "webkit";

// Object type alias with an optional property
type TestCase = { id: TestId; title: string; browser: BrowserName; tags?: string[] };

// String enum: named constants (readable in reports and logs)
enum Status {
  Passed = "PASSED",
  Failed = "FAILED",
  Skipped = "SKIPPED",
}

// Numeric enum: values start at 0 and auto-increment
enum Priority {
  Low, // 0
  Medium, // 1
  High, // 2
}

// A typed object: a wrong browser name would be a compile error
const tc: TestCase = { id: "TC-1", title: "Login", browser: "chromium" };

// Function that accepts an enum and returns a message
function report(test: TestCase, status: Status): string {
  return `${test.title} on ${test.browser}: ${status}`;
}

console.log(report(tc, Status.Passed)); // Login on chromium: PASSED
console.log(Priority.High, Priority[0]); // 2 Low  (numeric enums map both ways)
