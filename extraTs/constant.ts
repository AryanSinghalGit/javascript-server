import { Ipermission } from './interface';

const permissions: Ipermission = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    },
    'myUsers': {
        all: ['hod'],
        read: ['student', 'teacher'],
        write: ['teacher'],
        delete: ['admin'],
    }
};
export { permissions };