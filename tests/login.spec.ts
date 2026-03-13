import { test, expect } from '@playwright/test';
import { LoginPage} from '../src/pages/login.page';
import { HomePage } from '../src/pages/home.page';
import { SignupPage } from '../src/pages/signup.page';

test('Login Test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  //await loginPage.goto();
  //await loginPage.login('gonzalo123456@gmail.com', 'password123456');
  //await expect(page).toHaveURL('https://automationexercise.com/login');
});

test('Test Case 1: Register User', async ({ page }) => {
  const homePage = new HomePage(page);
  const signupPage = new SignupPage(page);

  // Step 1: Navigate to site
  await page.goto('https://automationexercise.com');

  // Step 2: Verify home page
  await expect(page.locator('img[alt="Website for automation practice"]')).toBeVisible();

  // Step 3: Click Signup/Login
  await homePage.clickSignupLogin();

  // Step 4: Verify "New User Signup!"
  await expect(page.locator('h2:has-text("New User Signup!")')).toBeVisible();

  // Step 5: Enter name and email
  await signupPage.fillSignupForm('Gonzalo Tester', `gonzalo${Date.now()}@test.com`);

  // Step 6: Click Signup
  await signupPage.clickSignup();

  // Step 7: Fill signup form and Step 8: Check newsletter & offers
  await signupPage.fillAccountInformation('Male', 'StrongPassword123', '10', '5', '1997', true, false);

  // Step 9: Fill address info
  await signupPage.fillAddressInformation('Gonzalo', 'Tester', 'Test Company', '123 Test St', 'Apt 4', 'United States', 'Test State', 'Test City', '12345', '555-1234');

  // Step 10: Create Account
  await signupPage.clickCreateAccount();

  // Step 11: Verify account created
  await expect(signupPage.accountCreatedHeadingGetter).toBeVisible();

  // Step 12: Continue
  await signupPage.clickCreateAccount();

  // Step 13: Verify logged in
  await expect(signupPage.loggedInAsTextGetter).toBeVisible();

  // Step 14: Delete account
  await signupPage.clickDeleteAccount();

  // Step 15: Verify account deleted
  await expect(signupPage.accountDeletedHeadingGetter).toBeVisible();
});

