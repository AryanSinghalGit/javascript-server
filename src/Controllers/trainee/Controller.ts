class Controller {
    static instance: Controller;
    static getInstance = () => {
        if (Controller.instance) {
            return Controller.instance;
        }
        else {
            Controller.instance = new Controller();
            return Controller.instance;
        }
    }
    create = (req, res) => {
        console.log('----------Create Trainee----------');
        res.send({
            status: 'ok',
            message: 'Trainee added successfully',
            data: {
                id: 241,
                name: 'Aman',
                address: 'Ghaziabad'
            }
        });
    };
    list = (req, res) => {
        console.log('----------Trainee List----------');
        res.send({
            status: 'ok',
            message: 'Trainee List',
            data: [{
                id: 241,
                name: 'Aman',
                address: 'Ghaziabad'
            },
            {
                id: 242,
                name: 'Aryan',
                address: 'Noida'
            },
            {
                id: 243,
                name: 'Neeraj',
                address: 'Delhi'
            }]
        }
        );
    };
    update = (req, res) => {
        console.log('----------Update Trainee----------');
        res.send({
            status: 'ok',
            message: 'Trainee Data successfully Updated',
            data: {
                id: 241,
                name: 'Divyam',
                address: 'Gurugram'
            }
        });
    };
    delete = (req, res) => {
        console.log('----------Delete Trainee----------');
        res.send(
            {
                status: 'ok',
                message: 'Trainee Data Successfully Deleted'
            }
        );
    };
}
export default Controller.getInstance();