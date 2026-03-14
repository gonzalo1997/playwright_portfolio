import { Page, Locator } from '@playwright/test';
import { TestUser } from '../types/testUser';

export class SignupPage {
    private page: Page;
    // Signup page locators
    private readonly newUserSignupHeading: Locator;
    private readonly signupNameInput: Locator;
    private readonly signupEmailInput: Locator;
    private readonly signupButton: Locator;

    // Account information locators
    private readonly genderMaleRadio: Locator;
    private readonly genderFemaleRadio: Locator;
    private readonly passwordInput: Locator;
    private readonly daysSelect: Locator;
    private readonly monthsSelect: Locator;
    private readonly yearsSelect: Locator;
    private readonly newsletterCheckbox: Locator;
    private readonly optinCheckbox: Locator;

    // Address information locators
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly companyInput: Locator;
    private readonly address1Input: Locator;
    private readonly address2Input: Locator;
    private readonly countrySelect: Locator;
    private readonly stateInput: Locator;
    private readonly cityInput: Locator;
    private readonly zipcodeInput: Locator;
    private readonly mobileNumberInput: Locator;

    // Account creation and verification locators
    private readonly createAccountButton: Locator;
    private readonly accountCreatedHeading: Locator;
    private readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators
        this.newUserSignupHeading = this.page.locator('h2:has-text("New User Signup!")');
        this.signupNameInput = this.page.locator('input[data-qa="signup-name"]');
        this.signupEmailInput = this.page.locator('input[data-qa="signup-email"]');
        this.signupButton = this.page.locator('button[data-qa="signup-button"]');

        // Signup Account Information locators
        this.genderMaleRadio = this.page.locator('#id_gender1');
        this.genderFemaleRadio = this.page.locator('#id_gender2');
        this.passwordInput = this.page.locator('#password');
        this.daysSelect = this.page.locator('#days');
        this.monthsSelect = this.page.locator('#months');
        this.yearsSelect = this.page.locator('#years');
        this.newsletterCheckbox = this.page.locator('#newsletter');
        this.optinCheckbox = this.page.locator('#optin');
        this.firstNameInput = this.page.locator('#first_name');
        this.lastNameInput = this.page.locator('#last_name');
        this.companyInput = this.page.locator('#company');
        this.address1Input = this.page.locator('#address1');
        this.address2Input = this.page.locator('#address2');
        this.countrySelect = this.page.locator('#country');
        this.stateInput = this.page.locator('#state');
        this.cityInput = this.page.locator('#city');
        this.zipcodeInput = this.page.locator('#zipcode');
        this.mobileNumberInput = this.page.locator('#mobile_number');

        // Creation of account locators
        this.createAccountButton = this.page.locator('button[data-qa="create-account"]');
        this.accountCreatedHeading = this.page.locator('h2[data-qa="account-created"]');
        this.continueButton = this.page.locator('a[data-qa="continue-button"]');
    }

    async clickSignup() {
        await this.signupButton.click();
    }

    get newUserSignupHeadingGetter() {
        return this.newUserSignupHeading;
    }

    async fillSignupForm(user: TestUser) {
        await this.signupNameInput.fill(user.name);
        await this.signupEmailInput.fill(user.email);
    }

    async fillAccountInformation(user: TestUser) {
        await this.chooseGender(user.gender);
        await this.passwordInput.fill(user.password);
        await this.selectDateOfBirth(user.day, user.month, user.year);
        await this.checkOptionalCheckboxes(user.newsLetter ?? false, user.optin ?? false);
        await this.firstNameInput.fill(user.firstName);
        await this.lastNameInput.fill(user.lastName);
        if (user.company) {
            await this.companyInput.fill(user.company);
        }
        await this.address1Input.fill(user.address1);
        if (user.address2) {
            await this.address2Input.fill(user.address2);
        }
        await this.countrySelect.selectOption(user.country);
        await this.stateInput.fill(user.state);
        await this.cityInput.fill(user.city);
        await this.zipcodeInput.fill(user.zipcode);
        await this.mobileNumberInput.fill(user.mobileNumber);
    }

    private async chooseGender(gender: string) {
        if (gender === 'Male') {
            await this.genderMaleRadio.check();
        } else if (gender === 'Female') {
            await this.genderFemaleRadio.check();
        }
        else {
            throw new Error('Invalid gender option. Use "Male" or "Female".');
        }
    }

    private async selectDateOfBirth(day: string, month: string, year: string) {
        await this.daysSelect.selectOption(day);
        await this.monthsSelect.selectOption(month);
        await this.yearsSelect.selectOption(year);
    }

    private async checkOptionalCheckboxes(newsLetter: boolean, optin: boolean) {
        if (newsLetter) {
            await this.newsletterCheckbox.check();
        }
        if (optin) {
            await this.optinCheckbox.check();
        }
    }

    async clickCreateAccount() {
        await this.createAccountButton.click();
    }

    get accountCreatedHeadingGetter() {
        return this.accountCreatedHeading;
    }

    async clickContinue() {
        await this.continueButton.click();
    }
}