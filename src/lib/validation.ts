/**
 * Validate an email address
 * @param email string
 * @returns boolean
 */
export function validateEmail (email: string): boolean {
    let matches = email.match(/^\w+(?:[-_.]\w+)*@[\w-]+(\.[a-z]{2,4})+$/gm);
    return matches !== null;
}

/*
Validators for passwords
*/
function atLeast8Chars(s: string): boolean {
    return s.length >= 8;
}

function atLeast1specialChar(s: string): boolean {
    return (s.match(/[\W_]/) || []).length >= 1;
}

function atLeast1Digit(s: string): boolean {
    return (s.match(/\d/) || []).length >= 1;
}

function atLeast1Uppercase(s: string): boolean {
    return (s.match(/[A-Z]/) || []).length >= 1;
}

function noWhitespace(s: string): boolean {
    return (s.match(/\s/) || []).length === 0;
}

/**
 * Validate a password
 * @param password string
 * @returns boolean
 */
export function validatePassword(password: string): boolean {

    let validators = [
        atLeast8Chars,
        atLeast1specialChar,
        atLeast1Digit,
        atLeast1Uppercase,
        noWhitespace,
    ];

    let results = validators.map(validate => validate(password));
    let validResults = results.filter(value => Boolean(value));
    return validResults.length === validators.length;
}