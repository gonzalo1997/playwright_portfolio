import { test, expect } from '@playwright/test';
import { LoginPage} from '../src/pages/login.page';
import { HomePage } from '../src/pages/home.page';
import { SignupPage } from '../src/pages/signup.page';

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

  // Step 7: Fill signup form, Step 8: Check newsletter & offers and Step 9: Fill address info
  await signupPage.fillAccountInformation({
    gender: 'Male',
    password: 'password123456',
    day: '1',
    month: 'January',
    year: '1997',
    newsLetter: true,
    optin: false,
    firstName: 'Gonzalo',
    lastName: 'Tester',
    company: 'Test Company',
    address1: '123 Test St',
    address2: 'Apt 4',
    country: 'United States',
    state: 'Test State',
    city: 'Test City',
    zipcode: '12345',
    mobileNumber: '555-1234'
  });

  // Step 10: Create Account
  await signupPage.clickCreateAccount();

  // Step 11: Verify account created
  await expect(signupPage.accountCreatedHeadingGetter).toBeVisible();

  // Step 12: Continue
  await signupPage.clickContinue();

  // Step 13: Verify logged in
  await expect(homePage.loggedInAsTextGetter).toBeVisible();

  // Step 14: Delete account
  await homePage.clickDeleteAccount();

  // Step 15: Verify account deleted
  await expect(homePage.accountDeletedHeadingGetter).toBeVisible();
});

test('Test Case 2: Login User with correct credentials', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  // Step 1: Navigate
  await page.goto('https://automationexercise.com');

  // Step 2: Verify home page
  await expect(page.locator('img[alt="Website for automation practice"]')).toBeVisible();

  // Step 3: Click Signup/Login
  await homePage.clickSignupLogin();

  // Step 4: Verify login form
  await expect(page.locator('h2:has-text("Login to your account")')).toBeVisible();

  // Step 5: Enter credentials
  await loginPage.fillLoginCredentials('your_registered_email@test.com', 'yourPassword123');

  // Step 6: Click Login
  await loginPage.clickLogin();

  // Step 7: Verify logged in
  await expect(homePage.loggedInAsTextGetter).toBeVisible();

  // Step 8: Delete account
  await homePage.clickDeleteAccount();

  // Step 9: Verify account deleted
  await expect(homePage.accountDeletedHeadingGetter).toBeVisible();
});

