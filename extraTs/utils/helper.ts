export function validateEmail(email: string): boolean {
    const regex: RegExp = /[a-z]([[-]*\w+[.]*){1,63}@successive[.]tech$/gmi;
    if (email.match(regex)) {
        return true;
    }
    else {
        return false;
    }
}