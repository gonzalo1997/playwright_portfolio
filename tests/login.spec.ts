import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page';

test('Login Test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  //await loginPage.goto();
  //await loginPage.login('gonzalo123456@gmail.com', 'password123456');
  //await expect(page).toHaveURL('https://automationexercise.com/login');
});

test('Test Case 1: Register User', async ({ page }) => {
  // Step 1: Navigate to site
  await page.goto('https://automationexercise.com');

  // Step 2: Verify home page
  await expect(page.locator('img[alt="Website for automation practice"]')).toBeVisible();

  // Step 3: Click Signup/Login
  await page.click('a[href="/login"]');

  // Step 4: Verify "New User Signup!"
  await expect(page.locator('h2:has-text("New User Signup!")')).toBeVisible();

  // Step 5: Enter name and email
  await page.fill('input[data-qa="signup-name"]', 'Gonzalo Tester');
  await page.fill('input[data-qa="signup-email"]', `gonzalo${Date.now()}@test.com`);

  // Step 6: Click Signup
  await page.click('button[data-qa="signup-button"]');

  // Step 7: Fill signup form
  await page.check('#id_gender1');
  await page.fill('#password', 'StrongPassword123');
  await page.selectOption('#days', '10');
  await page.selectOption('#months', '5');
  await page.selectOption('#years', '1997');

  // Step 8: Check newsletter & offers
  await page.check('#newsletter');
  await page.check('#optin');

  // Step 9: Fill address info
  await page.fill('#first_name', 'Gonzalo');
  await page.fill('#last_name', 'Tester');
  await page.fill('#company', 'Automation Inc');
  await page.fill('#address1', '123 Test Street');
  await page.fill('#address2', 'Suite 456');
  await page.selectOption('#country', 'Canada');
  await page.fill('#state', 'Ontario');
  await page.fill('#city', 'Toronto');
  await page.fill('#zipcode', 'M1A1A1');
  await page.fill('#mobile_number', '+1234567890');

  // Step 10: Create Account
  await page.click('button[data-qa="create-account"]');

  // Step 11: Verify account created
  await expect(page.locator('h2:has-text("Account Created!")')).toBeVisible();

  // Step 12: Continue
  await page.click('a[data-qa="continue-button"]');

  // Step 13: Verify logged in
  await expect(page.locator('a:has-text("Logged in as Gonzalo Tester")')).toBeVisible();

  // Step 14: Delete account
  await page.click('a[href="/delete_account"]');

  // Step 15: Verify account deleted
  await expect(page.locator('h2:has-text("Account Deleted!")')).toBeVisible();
});

