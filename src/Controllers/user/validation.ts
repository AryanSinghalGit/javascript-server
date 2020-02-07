const validation = {
    create:
        {
        name:
        {
            required: true,
            regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
            in: ['body'],
            errorMessage: 'Name is required',
        },
        address:
        {
            required: true,
            string: true,
            regex: /[\w]+/,
            in: ['body'],
            errorMessage: 'address is required'
        },
        email:
        {
            required: true,
            string: true,
            regex: /[a-z]([[-]*\w+[.]*){1,63}@successive[.]tech$/,
            in: ['body'],
            errorMessage: 'email is required'
        },
        dob:
        {
            required: true,
            date: true,
            in: ['body'],
            errorMessage: 'date is required'
        },
        mob:
        {
            required: true,
            number: true,
            regex: /[0-9]+$/,
            in: ['body'],
            length: 10,
            errorMessage: 'mobile no. is required',
            custom: (reqMethod, req, res, next) => {
            if ( req[reqMethod].length !== '10' ) {
                return true;
            }
        }
        },
        hobbies:
        {
            required: true,
            array: true,
            in: ['body'],
            errorMessage: 'email is required',
            custom: (reqMethod, req, res, next) => {
                if ( Array.isArray(req[reqMethod]) === false ) {
                    return true;
                }
            },
        }
    },
    delete:
    {
        id:
        {
            required: true,
            errorMessage: 'Id is required',
            in: ['params']
        }
    },
    get:
    {
        skip:
        {
            required: false,
            default: 0,
            number: true,
            regex: /[0-9]+/,
            in: ['query'],
            errorMessage: 'Skip is invalid',
            custom: (reqMethod, req, res, next): void => {
                if ( req[reqMethod].skip === undefined ) {
                    req[reqMethod].skip = '0';
                }
            }
        },
        limit:
        {
            required: false,
            default: 10,
            number: true,
            regex: /[0-9]+/,
            in: ['query'],
            errorMessage: 'Limit is invalid',
            custom: (reqMethod, req, res, next): void => {
                if ( req[reqMethod].limit === undefined ) {
                    req[reqMethod].limit = '10';
                }
            }
        }
    },
    update:
    {
        id:
        {
            required: true,
            string: true,
            regex: /[\w]+/,
            in: ['body'] ,
            errorMessage: 'Id is required'
        },
        dataToUpdate:
        {
            in: ['body'],
            required: true,
            isObject: true,
            errorMessage: 'Data is required',
            custom: (reqMethod, req, res, next) => {
                if (typeof req[reqMethod] !== 'object' ) {
                    return { error: 'Error Occured', message: 'Not an Object'};
                }
            }
        }
    }
};
export default validation ;
