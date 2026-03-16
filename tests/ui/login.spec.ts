import { test, expect } from '@playwright/test';
import { LoginPage} from '../../src/pages/login.page';
import { HomePage } from '../../src/pages/home.page';
import { SignupPage } from '../../src/pages/signup.page';
import { TestUser } from '../../src/types/testUser';
import { createUser } from '../../src/utils/apiHelper';
import { navigateToHome } from '../../src/utils/uiHelper';
import { buildTestUser } from '../../src/utils/userFactory';

test('Test Case 1: Register User', async ({ page }) => {
  const homePage = new HomePage(page);
  const signupPage = new SignupPage(page);
  const user = buildTestUser();

  // Step 1: Navigate to site
  await page.goto('https://automationexercise.com');

  // Step 2: Verify home page
  await expect(page.locator('img[alt="Website for automation practice"]')).toBeVisible();

  // Step 3: Click Signup/Login
  await homePage.clickSignupLogin();

  // Step 4: Verify "New User Signup!"
  await expect(page.locator('h2:has-text("New User Signup!")')).toBeVisible();

  // Step 5: Enter name and email
  await signupPage.fillSignupForm(user);

  // Step 6: Click Signup
  await signupPage.clickSignup();

  // Step 7: Fill signup form, Step 8: Check newsletter & offers and Step 9: Fill address info
  await signupPage.fillAccountInformation(user);

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

test('Test Case 2: Login User with correct credentials', async ({ page, request }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const user = buildTestUser();

  await createUser(request, user);

  // Step 1: Navigate and Step 2: Verify home page
  await navigateToHome(page);

  // Step 3: Click Signup/Login
  await homePage.clickSignupLogin();

  // Step 4: Verify login form
  await expect(loginPage.loginToYourAccountHeadingGetter).toBeVisible();

  // Step 5: Enter credentials
  await loginPage.fillLoginCredentials(user);

  // Step 6: Click Login
  await loginPage.clickLogin();

  // Step 7: Verify logged in
  await expect(homePage.loggedInAsTextGetter).toBeVisible();

  // Step 8: Delete account
  await homePage.clickDeleteAccount();

  // Step 9: Verify account deleted
  await expect(homePage.accountDeletedHeadingGetter).toBeVisible();
});

test('Test Case 3: Login User with incorrect email and password', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const user = buildTestUser({
    email: `wrong${Date.now()}@test.com`,
    password: 'WrongPassword123'
  });
  
  // Step 1: Navigate and Step 2: Verify home page
  await navigateToHome(page);

  // Step 3: Click Signup/Login
  await homePage.clickSignupLogin();

  // Step 4: Verify login form
  await expect(loginPage.loginToYourAccountHeadingGetter).toBeVisible();

  // Step 5: Enter credentials
  await loginPage.fillLoginCredentials(user);

  // Step 6: Click Login
  await loginPage.clickLogin();

  await expect(loginPage.wrongEmailOrPasswordAlertGetter).toBeVisible();
});



