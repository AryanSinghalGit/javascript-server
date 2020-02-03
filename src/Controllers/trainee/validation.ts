const validation = {
    create: {
        id: {
            required: true,
            string: true,
            regex: /[\w]+/gmi,
            in: ['body'],
            errorMessage: 'Id is required'
        },
        name:
        {
            required: true,
            regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/gmi,
            in: ['body'],
            errorMessage: 'Name is required',
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
            regex: /[0-9]+/gmi ,
            in: ['query'],
            errorMessage: 'Skip is invalid',
            custom: (reqMethod, req, res, next): void => {
                if ( req[reqMethod]['limit'] === undefined ) {
                    req[reqMethod]['limit'] = '0';
                }
            }
        },
        limit:
        {
            required: false,
            default: 10,
            number: true,
            regex: /[0-9]+/gmi ,
            in: ['query'],
            errorMessage: 'Limit is invalid',
            custom: (reqMethod, req, res, next): void => {
                if ( req[reqMethod]['limit'] === undefined ) {
                    req[reqMethod]['limit'] = '10';
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
            regex: /[\w]+/gmi,
            in: ['body']
        },
        dataToUpdate:
        {
            in: ['body'],
            required: true,
            isObject: true,
            custom: (reqMethod, req, res, next): void => {
                if (typeof req[reqMethod] !== 'object' || req[reqMethod].constructor !== Object ) {
                    next({ error: 'Error Occured', message: 'Not an Object'});
                }
            }
        }
    }
};
export default validation ;