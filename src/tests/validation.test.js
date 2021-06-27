import { validateEmail, validatePassword } from '../lib/validation';

describe('Input validation', () => {

    describe('Emails', () => {

        const invalidEmails = [
            'test.gmail.com',
            'test@gmail',
            'test@gmail.f',
            'test.@gmail.com',
        ];

        const validEmails = [
            'test@gmail.com',
            'test-1@gmail.com',
            'test@gmail.co.uk',
            'long-email.test@gmail.fr',
        ];

        it('Reject bad emails', () => {
            invalidEmails.forEach(invalidEmail => {
                expect(validateEmail(invalidEmail)).toBeFalsy();
            });
        });

        it('Accept valid emails', () => {
            validEmails.forEach(validEmail => {
                expect(validateEmail(validEmail)).toBeTruthy();
            });
        });
    });

    describe('Passwords', () => {

        const invalidPasswords = [
            'abc=123+',
            'abcdefgh',
            '12345678',
            'abcd1234',
            'a C=123+',
            'ABC=123+',
        ];

        const validPasswords = [
            'abC=123+',
        ];

        it('Reject bad passwords', () => {
            invalidPasswords.forEach(invalidPassword => {
                expect(validatePassword(invalidPassword)).toBeFalsy();
            });
        });

        it('Accept valid passwords', () => {
            validPasswords.forEach(validPassword => {
                expect(validatePassword(validPassword)).toBeTruthy();
            });
        });
    });
});
