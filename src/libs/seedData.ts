import UserRepository from '../repositories/user/UserRepository';
const user = {
    name: 'Vinay Chaudhary',
    address: 'Ghaziabad',
    email: 'vinay.chaudhary@successive.tech',
    dob: '07/25/1998',
    mob: 7789839178,
    hobbies: ['watching movies', 'hiking'] ,
    role: 'head-trainer',
    createdAt: Date.now(),
    createdBy: 'seed data',
};
const seedData = () => {
    UserRepository.count()
    .then((count) => {
        if (count === 0)
           return UserRepository.create(user);
        else {
            throw new Error(`Data is already seeded`);
        }
    })
    .then(() => console.log('Data seeded'))
    .catch((err) => {
        console.log(err);
    });
};
export default seedData;