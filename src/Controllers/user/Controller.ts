import { Request, Response, response } from 'express';
import { UserRepository } from '../../repositories/user';
import SystemResponse from '../../libs/SystemResponse';
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
        const { name, address, email, dob, mob, hobbies, role } = req.body;
        UserRepository.create({ name, address, email, dob, mob, hobbies, role }).then((userData) => {
            const message = 'Trainee added successfully';
            const data = userData;
            SystemResponse.success(res, data, message);
        })
        .catch((error: any) => {
            return SystemResponse.failure(res, error, 'User is not create');
        });
    };
    list = (req: Request, res: Response) => {
        console.log('----------Trainee List----------');
        console.log(`req.query.skip = ${req.query.skip},req.query.limit = ${req.query.limit}`);
        UserRepository.list().then((dataList) => {
        console.log(dataList);
        if (dataList !== []) {
            const message = 'Trainee List';
            const data = dataList;
            SystemResponse.success(res, data, message);
        }
    })
    .catch((error: any) => {
        return SystemResponse.failure(res, error, 'User data does not exist');
    });
    };
    update = (req: Request, res: Response) => {
        console.log('----------Update Trainee----------');
        UserRepository.update(req.body.id, req.body.dataToUpdate).then((value) => {
            if (value) {
                const message = 'Trainee Data successfully Updated';
                const data = req.body.dataToUpdate;
                SystemResponse.success(res, data, message);
            }
        })
        .catch((error: any) => {
            return SystemResponse.failure(res, error, 'User data is not Updated');
        });
    };
    delete = (req: Request, res: Response) => {
        console.log('----------Delete Trainee----------');
        UserRepository.delete(req.params.id).then((value) => {
            if (value) {
                const message = 'Trainee Data Successfully Deleted';
                const data = req.body.dataToUpdate;
                SystemResponse.success(res, req.params.id, message);
            }
        })
        .catch((error: any) => {
            return SystemResponse.failure(res, error, 'User data is not deleted');
        });

    };
}
export default Controller.getInstance();