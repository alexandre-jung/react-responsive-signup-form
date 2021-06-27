import { validateEmail } from '../lib/validation';

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
});
