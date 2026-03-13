import { Page, Locator } from '@playwright/test';

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
    private readonly loggedInAsText: Locator;
    private readonly deleteAccountLink: Locator;
    private readonly accountDeletedHeading: Locator;

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

        this.loggedInAsText = this.page.locator('a:has-text("Logged in as Gonzalo Tester")');
        this.deleteAccountLink = this.page.locator('a[href="/delete_account"]');
        this.accountDeletedHeading = this.page.locator('h2[data-qa="account-deleted"]');
    }

    get newUserSignup() {
        return this.newUserSignupHeading;
    }

    get signupNameInputField() {
        return this.signupNameInput;
    }

    get signupEmailInputField() {
        return this.signupEmailInput;
    }

    get signupButtonElement() {
        return this.signupButton;
    }

    get genderMale() {
        return this.genderMaleRadio;
    }

    get genderFemale() {
        return this.genderFemaleRadio;
    }
}