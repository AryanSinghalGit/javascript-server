const validation = {
    get:
    {
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
        password:
        {
            required: true,
            in: ['body'],
        }
    }
};
export default validation ;