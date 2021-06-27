/**
 * Validate an email address
 * @param email string
 * @returns boolean
 */
export default function validateEmail (email: string): boolean {
    let matches = email.match(/^\w+(?:[-_.]\w+)*@[\w-]+(\.[a-z]{2,4})+$/gm);
    return matches !== null;
}