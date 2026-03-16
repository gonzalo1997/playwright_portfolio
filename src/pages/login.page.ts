import { Page, Locator } from '@playwright/test';
import { TestUser } from '../types/testUser';

export class LoginPage {
    private page: Page;
    private loginToYourAccountHeading: Locator;
    private emailAdressInput : Locator;
    private passwordInput : Locator;
    private loginButton : Locator;
    private wrongEmailOrPasswordAlert : Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginToYourAccountHeading = page.locator('h2:has-text("Login to your account")');
    this.emailAdressInput = page.locator('[data-qa="login-email"]');
    this.passwordInput = page.locator('[data-qa="login-password"]');
    this.loginButton = page.locator('[data-qa="login-button"]');
    this.wrongEmailOrPasswordAlert = page.locator('p:has-text("Your email or password is incorrect!")');
  }

  async goto() {
    await this.page.goto('https://automationexercise.com/login');
  }

  get loginToYourAccountHeadingGetter() {
    return this.loginToYourAccountHeading;
  }

  async fillLoginCredentials(user: TestUser) {
    await this.emailAdressInput.fill(user.email);
    await this.passwordInput.fill(user.password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  get wrongEmailOrPasswordAlertGetter() {
    return this.wrongEmailOrPasswordAlert;
  }
}
