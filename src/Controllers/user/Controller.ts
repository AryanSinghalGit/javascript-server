import { Request, Response } from 'express';
import { UserRepository } from '../../repositories/user';
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
        const { name, address, email, dob, mob, hobbies } = req.body;
        UserRepository.create({ name, address, email, dob, mob, hobbies }).then((userData) => {
            res.send({
                status: 'ok',
                message: 'Trainee added successfully',
                data: userData
            });
        });
    };
    list = (req: Request, res: Response) => {
        console.log('----------Trainee List----------');
        console.log(`req.query.skip = ${req.query.skip},req.query.limit = ${req.query.limit}`);
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