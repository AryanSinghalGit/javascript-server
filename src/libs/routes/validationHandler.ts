export default (config) => {
    return (req, res, next ) => {
    console.log('---------Validation Handler---------');
    console.log('The config is ', config);
    console.log(req.body);
    Object.keys(config).forEach(key => {
        console.log(`---------${ key }---------`); //
        const { errorMessage } = config[key];
        const { in: reqType } = config[key];
        reqType.forEach(reqMethod => {
        const keyValue = req[reqMethod][key];
        if ( config[key].required === true ) {
            if ( keyValue === undefined || keyValue === null ) {
                console.log('----inside required key is blank----', errorMessage);
                return next({ error: 'Error Occured', message: `${ errorMessage }` });
            }
            if (config[key].regex !== undefined) {
                const { regex } = config[key];
                console.log('----outside regex----', regex, keyValue);
                if (!regex.test(keyValue)) {
                    console.log('----inside regex----', errorMessage, regex, keyValue);
                    return next({ error: 'Error Occured', message: `${ key } is invalid` });
                }
            }
        }
        if (config[key].custom !== undefined )
            config[key].custom(reqMethod, req, res, next );
        });
    });
    return next();
    } ;
};