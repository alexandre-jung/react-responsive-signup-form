import { validateEmail, validatePassword } from '../lib/validation';

describe('Input validation', (): void => {

    describe('Emails', (): void => {

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

        it('Reject bad emails', (): void => {
            invalidEmails.forEach(invalidEmail => {
                expect(validateEmail(invalidEmail)).toBeFalsy();
            });
        });

        it('Accept valid emails', (): void => {
            validEmails.forEach(validEmail => {
                expect(validateEmail(validEmail)).toBeTruthy();
            });
        });
    });

    describe('Passwords', (): void => {

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

        it('Reject bad passwords', (): void => {
            invalidPasswords.forEach(invalidPassword => {
                expect(validatePassword(invalidPassword)).toBeFalsy();
            });
        });

        it('Accept valid passwords', (): void => {
            validPasswords.forEach(validPassword => {
                expect(validatePassword(validPassword)).toBeTruthy();
            });
        });
    });
});
