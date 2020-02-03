import { Request, Response } from 'express';
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
    create = (req: Request, res: Response) => {
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
    list = (req: Request, res: Response) => {
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
    update = (req: Request, res: Response) => {
        console.log('----------Update Trainee----------', req.params.id);
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
    delete = (req: Request, res: Response) => {
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