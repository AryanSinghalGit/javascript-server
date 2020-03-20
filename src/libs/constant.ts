import { Ipermission } from './interface';

const permissions: Ipermission = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    },
    'traineeModule': {
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

const options = {
  definition: {
    info: {
      title: 'Javascript-Server API',
      version: '1.0.0',
    },
    securityDefinitions: {
      Bearer: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'headers'
      }
    },
    basePath: '/api',
  },
  swagger: '2.0',
  apis: ['./dist/Controllers/**/routes.js'],
};

export { permissions, options };
