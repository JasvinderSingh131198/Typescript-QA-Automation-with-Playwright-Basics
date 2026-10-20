// Import types only; they are erased at runtime
import { expect, type Locator, type Page } from "@playwright/test";

// Page Object Model: one class per page keeps tests short and readable
export class HomePage {
  // Locators are declared once and reused (readonly = cannot be reassigned)
  private readonly getStartedLink: Locator;

  // The constructor receives Playwright's Page object
  constructor(private readonly page: Page) {
    // Find the link by its accessible role and name (resilient selector)
    this.getStartedLink = page.getByRole("link", { name: "Get started" });
  }

  // Async method: every browser action must be awaited
  async open(): Promise<void> {
    await this.page.goto("/"); // baseURL comes from playwright.config.ts
  }

  // Action method: click the "Get started" link
  async clickGetStarted(): Promise<void> {
    await this.getStartedLink.click();
  }

  // Assertion method: web-first assertion that auto-waits for the title
  async expectTitleToContain(text: string): Promise<void> {
    await expect(this.page).toHaveTitle(new RegExp(text));
  }
}
