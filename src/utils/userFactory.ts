import { TestUser } from '../types/testUser';

export function buildTestUser(overrides: Partial<TestUser> = {}): TestUser {
  return {
    name: 'Gonzalo Tester',
    email: `user${Date.now()}@test.com`,
    password: 'Password123',
    gender: 'Male',
    birth_day: '1',
    birth_month: 'January',
    birth_year: '1997',
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
    mobileNumber: '555-1234',
    ...overrides
  };
}
