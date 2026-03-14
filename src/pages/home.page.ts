import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    // Home page locators
    readonly homePageImage: Locator;
    readonly signupLoginLink: Locator;
    private readonly loggedInAsText: Locator;
    private readonly deleteAccountLink: Locator;
    private readonly accountDeletedHeading: Locator;


    constructor(page: Page) {
        this.page = page;

        // Initialize locators
        this.homePageImage = this.page.locator('img[alt="Website for automation practice"]');
        this.signupLoginLink = this.page.locator('a[href="/login"]');
        this.loggedInAsText = this.page.locator('a:has-text("Logged in as ")');
        this.deleteAccountLink = this.page.locator('a[href="/delete_account"]');
        this.accountDeletedHeading = this.page.locator('h2[data-qa="account-deleted"]');
    }

    // Optional: Add methods for common actions, e.g.,
    async gotoHome() {
        await this.page.goto('https://automationexercise.com');
    }

    async clickSignupLogin() {
        await this.signupLoginLink.click();
    }

    get loggedInAsTextGetter() {
        return this.loggedInAsText;
    }

    async clickDeleteAccount() {
        await this.deleteAccountLink.click();
    }

    get accountDeletedHeadingGetter() {
        return this.accountDeletedHeading;
    }
}