// Import the test runner and assertion function
import { test, expect } from "@playwright/test";
// Import our page object (shows import/export in a real framework)
import { HomePage } from "./pages/HomePage";

// Data-driven testing: an array of inputs drives multiple tests
const keywords: string[] = ["Playwright", "Fast"];

// Group related tests
test.describe("Playwright home page", () => {
  // Create a fresh page object before each test
  let home: HomePage;

  // Hook: runs before every test in this group
  test.beforeEach(async ({ page }) => {
    home = new HomePage(page); // build the page object with the browser page
    await home.open(); // navigate to the home page
  });

  // A simple test with the page object
  test("has the expected title", async () => {
    await home.expectTitleToContain("Playwright"); // assertion lives in the page object
  });

  // Loop over data to generate one test per keyword
  for (const word of keywords) {
    test(`page body mentions "${word}"`, async ({ page }) => {
      // Assert the visible page text contains the keyword
      await expect(page.locator("body")).toContainText(word);
    });
  }

  // Navigation test using an action then a URL assertion
  test("Get started opens the docs", async ({ page }) => {
    await home.clickGetStarted(); // click through the page object
    await expect(page).toHaveURL(/docs/); // URL should now contain "docs"
  });
});
