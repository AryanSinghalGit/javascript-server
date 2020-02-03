export default (config) => {
    return (req, res, next ) => {
    console.log('---------Validation Handler---------');
    console.log('The config is ', config);
    console.log(req.body);
    Object.keys(config).forEach(key => {
        console.log(`---------${ key }---------`);
        const { in: reqType } = config[key];
        reqType.forEach(reqMethod => {
        const keyValue = req[reqMethod][key];
        if ( config[key].required === true ) {
            if ( keyValue === undefined ) {
                next({ error: 'Error Occured', message: `${ config[key].errorMessage }` });
            }
        }
        if (config[key].regex !== undefined) {
            const { regex } = config[key];
            if (!keyValue.match(regex)) {
                console.log(`${ key }`);
                next({ error: 'Error Occured', message: `${ config[key].errorMessage }` });
            }
        }
        if (config[key] !== undefined )
            config[key].custom(reqMethod, req, res, next );
        });
    });
    } ;
};