// Basic types: TypeScript checks these at compile time
const testName: string = "Login test"; // text
const retries: number = 2; // whole or decimal numbers
const isHeadless: boolean = true; // true / false
let browser: string | null = null; // union type: string OR null
const anything: unknown = "safe alternative to any"; // unknown forces a check before use

// Type inference: no annotation needed, TS knows this is a number
const timeoutMs = 5000;

// Function with typed parameters and a typed return value
function describeRun(name: string, tries: number): string {
  // Return a readable summary
  return `${name} will run ${tries} time(s)`;
}

// Optional (?) and default parameters
function launch(name: string, mode: string = "chromium", slowMo?: number): string {
  // "??" uses 0 when slowMo is undefined
  return `${name} on ${mode}, slowMo=${slowMo ?? 0}`;
}

// Arrow function: shorter function syntax
const double = (n: number): number => n * 2;

// Narrow "unknown" to string with typeof before using string methods
if (typeof anything === "string") {
  console.log(anything.toUpperCase()); // SAFE ALTERNATIVE TO ANY
}

browser = "firefox"; // allowed because the union includes string
console.log(describeRun(testName, retries)); // Login test will run 2 time(s)
console.log(launch("Smoke", undefined, 100)); // Smoke on chromium, slowMo=100
console.log(isHeadless, browser, double(timeoutMs)); // true firefox 10000
