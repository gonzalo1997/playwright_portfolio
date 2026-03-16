import { Page, expect } from '@playwright/test';
import { TestUser } from '../types/testUser';
import { LoginPage } from '../pages/login.page';
import { HomePage } from '../pages/home.page';

export async function navigateToHome(page: Page) {
  const homePage = new HomePage(page);
  await page.goto('https://automationexercise.com');
  await expect(homePage.homePageImage).toBeVisible();
}

export async function login(page: Page, user: TestUser) {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  await navigateToHome(page);
  await homePage.clickSignupLogin();
  await expect(loginPage.loginToYourAccountHeadingGetter).toBeVisible();
  await loginPage.fillLoginCredentials(user);
  await loginPage.clickLogin();
  await expect(homePage.loggedInAsTextGetter).toBeVisible();
}
