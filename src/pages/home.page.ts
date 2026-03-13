import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  // Home page locators
  readonly homePageImage: Locator;
  readonly signupLoginLink: Locator;

  
  constructor(page: Page) {
    this.page = page;

    // Initialize locators
    this.homePageImage = this.page.locator('img[alt="Website for automation practice"]');
    this.signupLoginLink = this.page.locator('a[href="/login"]');
  }

  // Optional: Add methods for common actions, e.g.,
  async gotoHome() {
    await this.page.goto('https://automationexercise.com');
  }

  async clickSignupLogin() {
    await this.signupLoginLink.click();
  }
}