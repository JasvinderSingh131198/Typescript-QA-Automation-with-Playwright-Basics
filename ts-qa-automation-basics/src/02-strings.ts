// A sample page title, like one read from a web page during a test
const title: string = "  Playwright - Fast Reliable Testing  ";

// trim() removes spaces at both ends
const clean = title.trim();
// toLowerCase() makes comparisons case-insensitive
const lower = clean.toLowerCase();
// includes() is the typical assertion-style check
const hasWord = lower.includes("playwright");
// split() turns text into an array of words
const words = clean.split(" ");
// replace() swaps part of a string
const replaced = clean.replace("Fast", "Quick");
// slice() extracts a part: characters 0 to 10
const part = clean.slice(0, 10);
// Template literal with an expression inside ${}
const message = `Title has ${words.length} words`;
// Regular expression test, often used for URL checks
const isUrl = /^https?:\/\//.test("https://playwright.dev");

console.log(clean); // Playwright - Fast Reliable Testing
console.log(hasWord, part, replaced); // true Playwright Playwright - Quick Reliable Testing
console.log(message, isUrl); // Title has 5 words true
