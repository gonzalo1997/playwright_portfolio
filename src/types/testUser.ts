export interface TestUser {
    name: string;
    email: string;
    password: string;
    gender: string;
    birth_day: string;
    birth_month: string;
    birth_year: string;
    newsLetter?: boolean;
    optin?: boolean;
    firstName: string;
    lastName: string;
    company?: string;
    address1: string;
    address2?: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    mobileNumber: string;
}