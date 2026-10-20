// Map: key/value pairs, keeps insertion order
const testStatus = new Map<string, string>();
testStatus.set("login", "passed"); // add an entry
testStatus.set("search", "failed"); // add another entry
testStatus.set("login", "retried"); // same key overwrites the value

// Set: stores only unique values (duplicates are ignored)
const browsers = new Set<string>(["chromium", "firefox", "chromium"]);
browsers.add("webkit"); // add a new unique value

// Iterate a Map with destructuring
for (const [name, status] of testStatus) {
  console.log(`${name}: ${status}`);
}

// Remove duplicates from an array using a Set
const ids = [1, 2, 2, 3, 3, 3];
const uniqueIds = [...new Set(ids)];

// Record: an object type with fixed key and value types
const env: Record<string, string> = { qa: "qa.example.com", prod: "example.com" };

console.log(testStatus.get("login"), testStatus.has("api")); // retried false
console.log(browsers.size, uniqueIds, env["qa"]); // 3 [ 1, 2, 3 ] qa.example.com
