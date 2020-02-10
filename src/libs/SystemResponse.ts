class SystemResponse {
    static success = (res, data, message = 'Success') => {
        return res.status(200).send({
               status: 'ok',
               message,
               data
        });
    }
    static failure = (res, err, message = 'Failure') => {
        return res.status(200).send({
               status: 'Not ok',
               message,
               err
        });
    }
}
export default SystemResponse;