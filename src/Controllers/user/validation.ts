const validation = {
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
    login:
    {
        email:
        {
            required: true,
            string: true,
            regex: /[a-z]([[-]*\w+[.]*){1,63}@successive[.]tech$/,
            in: ['body'],
            errorMessage: 'email is required'
        },
    }
};
export default validation ;