import { validateEmail } from './helper';
import { Iuser } from '../interface';
function validateUser(user: Iuser[]): void {
    const validEmails: string[] = [];
    const invalidEmails: string[] = [];
    user.forEach((value: Iuser, index: number) => {
        const { traineeEmail, reviewerEmail } = user[index];
        if (validateEmail(traineeEmail)) {
            validEmails.push(traineeEmail);
        }
        else {
            invalidEmails.push(traineeEmail);
        }
        if (validateEmail(reviewerEmail)) {

            validEmails.push(reviewerEmail);
        }
        else {
            invalidEmails.push(reviewerEmail);
        }

    });
    console.log('Valid Users are:\n');
    validEmails.forEach(element => console.log(element));
    console.log('\nNo. of Valid Users: ', validEmails.length);
    console.log('-----------------------------------------------------');

    console.log('\nInvalid Users are:\n');
    invalidEmails.forEach(element => console.log(element));
    console.log('\nNo. of Invalid Users: ', invalidEmails.length);
}
export default validateUser;