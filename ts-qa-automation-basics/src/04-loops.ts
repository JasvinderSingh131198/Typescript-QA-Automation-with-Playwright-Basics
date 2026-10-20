// Data to loop over: login credentials used in data-driven tests
const users: string[] = ["admin", "guest", "tester"];

// Classic for loop: use when you need the index
for (let i = 0; i < users.length; i++) {
  console.log(`for: ${i} -> ${users[i]}`); // for: 0 -> admin ...
}

// for...of loop: iterates over VALUES (most readable)
for (const user of users) {
  console.log(`for...of: ${user}`);
}

// for...in loop: iterates over KEYS of an object
const config = { browser: "chromium", headless: true };
for (const key in config) {
  // Cast the key so TypeScript allows indexing the object
  console.log(`for...in: ${key} = ${config[key as keyof typeof config]}`);
}

// while loop: repeat until a condition fails (like retrying a flaky step)
let attempt = 1;
while (attempt <= 3) {
  console.log(`while: attempt ${attempt}`);
  attempt++; // increase the counter so the loop ends
}

// do...while loop: always runs at least once
let count = 0;
do {
  count++; // runs once even though the condition is false
} while (count < 0);
console.log(`do...while ran ${count} time(s)`); // 1

// forEach: array method, cannot use break
users.forEach((u, index) => console.log(`forEach: ${index + 1}. ${u}`));
