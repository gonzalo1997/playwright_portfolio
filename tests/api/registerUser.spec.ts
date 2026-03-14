import { test, expect } from '@playwright/test';
import { TestUser } from '../../src/types/testUser';

test('API 11: POST To Create/Register User Account', async ({ request }) => {
    const user: TestUser = {
        name: 'Gonzalo Tester',
        email: `gonzalo${Date.now()}@test.com`,
        password: 'Password123',
        gender: 'Male',
        birth_day: '10',
        birth_month: '5',
        birth_year: '1997',
        firstName: 'Gonzalo',
        lastName: 'Tester',
        company: 'Automation Inc',
        address1: '123 Test Street',
        address2: 'Depto A',
        country: 'Canada',
        state: 'Ontario',
        city: 'Toronto',
        zipcode: 'M1A1A1',
        mobileNumber: '+1234567890'
    };


    const response = await request.post('https://automationexercise.com/api/createAccount', {
        form: {
            name: user.name,
            email: user.email,
            password: user.password,
            title: 'Mr',
            birth_date: '10',
            birth_month: '5',
            birth_year: '1997',
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

    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log(body);
    
    expect(body).toHaveProperty('responseCode', 201);
});
