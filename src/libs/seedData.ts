import UserRepository from '../repositories/user/UserRepository';

const user = {
    name: 'Aryan Singhal',
    address: 'Ghaziabad',
    email: 'aryan.singhal@successive.tech',
    dob: '07/25/1998',
    mob: 7789839178,
    hobbies: ['watching movies', 'reading books'] ,
};
const seedData = () => {
    UserRepository.count().then((count) => {
        if (count === 0)
            UserRepository.create(user).then(() => console.log('Data seeded'));
        else {
            console.log(`${ count } Data is already present`);
        }
    })
    .catch((err) => {
        console.log(err);
    });

};
export default seedData;