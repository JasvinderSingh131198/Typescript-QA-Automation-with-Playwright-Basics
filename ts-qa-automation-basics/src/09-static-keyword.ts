// Static members belong to the CLASS, not to objects
class TestRunner {
  static totalRuns = 0; // shared counter across all objects
  static readonly VERSION = "1.0.0"; // shared constant

  // Static method: call with TestRunner.reset(), no "new" needed
  static reset(): void {
    TestRunner.totalRuns = 0; // reset the shared counter
  }

  // Instance method: uses the shared static counter
  run(name: string): void {
    TestRunner.totalRuns++; // every object increments the same counter
    console.log(`Running ${name} (total: ${TestRunner.totalRuns})`);
  }
}

const a = new TestRunner(); // first object
const b = new TestRunner(); // second object
a.run("login"); // total: 1
b.run("search"); // total: 2 (shared between a and b)
console.log(TestRunner.VERSION); // 1.0.0
TestRunner.reset(); // call static method on the class
console.log(TestRunner.totalRuns); // 0
