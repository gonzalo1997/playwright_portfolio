import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://automationexercise.com/login');
  }

  async login(user: string, password: string) {
    await this.page.fill('#username', user);
    await this.page.fill('#password', password);
    await this.page.click('#submit');
  }
}
