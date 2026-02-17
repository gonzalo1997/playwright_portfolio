import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page';

test('Login exitoso', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('usuario', 'password123');
  await expect(page).toHaveURL(/dashboard/);
});
