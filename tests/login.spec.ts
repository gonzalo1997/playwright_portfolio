import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page';

test('Login Test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('gonzalo123456@gmail.com', 'password123456');
  await expect(page).toHaveURL('https://automationexercise.com/login');
});
