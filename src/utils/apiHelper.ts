import { APIRequestContext } from '@playwright/test';
import { TestUser } from '../types/testUser';

export async function createUser(request: APIRequestContext, user: TestUser) {
  const response = await request.post('https://automationexercise.com/api/createAccount', {
    form: {
      name: user.name,
      email: user.email,
      password: user.password,
      gender: user.gender,
      birth_date: user.birth_day,
      birth_month: user.birth_month,
      birth_year: user.birth_year,
      firstname: user.firstName,
      lastname: user.lastName,
      company: user.company ?? '',
      address1: user.address1,
      address2: user.address2 ?? '',
      country: user.country,
      state: user.state,
      city: user.city,
      zipcode: user.zipcode,
      mobile_number: user.mobileNumber
    }
  });

  if (response.status() !== 200) {
    throw new Error(`User creation failed: ${response.status()}`);
  }

  return await response.json();
}
