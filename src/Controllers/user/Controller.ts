import { Request, Response, response } from 'express';
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
        UserRepository.list().then((dataList) => {
        console.log(dataList);
        res.send({
            status: 'ok',
            message: 'Trainee List',
            data: dataList
        }
        );
    });
    };
    update = (req: Request, res: Response) => {
        console.log('----------Update Trainee----------');
        UserRepository.update(req.body.id, req.body.dataToUpdate).then((value) => {
            if (value) {
                res.send({
                    status: 'ok',
                    message: 'Trainee Data successfully Updated',
                    data: req.body.dataToUpdate
                });
            }
            else {
                res.send({
                    status: 'ok',
                    message: 'Data does not exist',
                });
            }
        });
    };
    delete = (req: Request, res: Response) => {
        console.log('----------Delete Trainee----------');
        UserRepository.delete(req.params.id).then((value) => {
            if (value)
                res.send(
                    {
                        status: 'ok',
                        message: 'Trainee Data Successfully Deleted'
                    });
            else
                res.send({
                    status: 'ok',
                    message: 'Data does not exist'
                });
        });

    };
}
export default Controller.getInstance();