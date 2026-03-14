import { Page, Locator } from '@playwright/test';

export class LoginPage {
    private page: Page;
    private loginToYourAccountHeading: Locator;
    private emailAdressInput : Locator;
    private passwordInput : Locator;
    private loginButton : Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginToYourAccountHeading = page.locator('h2:has-text("Login to your account")');
    this.emailAdressInput = page.locator('[data-qa="login-email"]');
    this.passwordInput = page.locator('[data-qa="login-password"]');
    this.loginButton = page.locator('[data-qa="login-button"]');
  }

  async goto() {
    await this.page.goto('https://automationexercise.com/login');
  }

  get loginToYourAccountHeadingGetter() {
    return this.loginToYourAccountHeading;
  }

  async fillLoginCredentials(email: string, password: string) {
    await this.emailAdressInput.fill(email);
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }
}
