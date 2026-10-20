// Helper that waits for the given milliseconds (returns a Promise)
const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

// async function always returns a Promise
async function fetchTitle(page: string, delay: number): Promise<string> {
  await sleep(delay); // "await" pauses here until the Promise finishes
  return `Title of ${page}`; // value is wrapped in a Promise automatically
}

// Function that fails, to show error handling with await
async function failingStep(): Promise<never> {
  await sleep(10); // simulate a slow step
  throw new Error("Step timed out"); // rejected Promise
}

// Main function so we can use "await" at the top level of our logic
async function main(): Promise<void> {
  // Sequential: one after another (about 200 ms total)
  const home = await fetchTitle("home", 100);
  const cart = await fetchTitle("cart", 100);
  console.log(home, "|", cart);

  // Parallel: Promise.all runs both together (about 100 ms total)
  const [a, b] = await Promise.all([fetchTitle("login", 100), fetchTitle("search", 100)]);
  console.log(a, "|", b);

  // try/catch works with await just like synchronous code
  try {
    await failingStep();
  } catch (error) {
    console.log(`Caught: ${(error as Error).message}`); // Caught: Step timed out
  }
}

// Start the program and log any unexpected failure
main().catch(console.error);
