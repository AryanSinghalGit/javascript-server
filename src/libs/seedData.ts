import UserRepository from '../repositories/user/UserRepository';

const user = {
    name: 'Vinay Chaudhary',
    address: 'Ghaziabad',
    email: 'vinay.chaudhary@successive.tech',
    dob: '07/25/1998',
    mob: 7789839178,
    hobbies: ['watching movies', 'hiking'] ,
    role: 'Head-Trainer'
};
const seedData = () => {
    UserRepository.count().then((count) => {
        if (count === 0)
            UserRepository.create(user).then(() => console.log('Data seeded'));
        else {
            console.log(`Data is already seeded`);
        }
    })
    .catch((err) => {
        console.log(err);
    });

};
export default seedData;