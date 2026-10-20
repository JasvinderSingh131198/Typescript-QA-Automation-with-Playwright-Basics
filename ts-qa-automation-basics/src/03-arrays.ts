// Typed array of test case names
const tests: string[] = ["login", "search", "checkout", "logout"];

tests.push("profile"); // add to the end
tests.shift(); // remove from the start ("login")

// map(): transform every item into a new array
const upper = tests.map((t) => t.toUpperCase());
// filter(): keep only items that match a condition
const longNames = tests.filter((t) => t.length > 6);
// find(): first match or undefined
const found = tests.find((t) => t.startsWith("c"));
// some(): is there at least one match?
const hasLogout = tests.some((t) => t === "logout");
// reduce(): combine all items into one value
const totalChars = tests.reduce((sum, t) => sum + t.length, 0);
// Spread operator copies/merges arrays
const allTests = [...tests, "api-test"];
// Destructuring pulls out the first two items
const [first, second] = allTests;
// Tuple: fixed length with a type per position
const result: [string, boolean] = ["search", true];

console.log(upper); // [ 'SEARCH', 'CHECKOUT', 'LOGOUT', 'PROFILE' ]
console.log(longNames, found, hasLogout, totalChars); // [ 'checkout', 'profile' ] checkout true 27
console.log(first, second, result); // search checkout [ 'search', true ]
