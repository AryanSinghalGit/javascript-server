import { Request, Response } from 'express';
import { userRepository } from '../../repositories/user';
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
    create = async (req, res: Response) => {
        console.log('----------Create Trainee----------');
        const { name, address, email, dob, mob, hobbies, role } = req.body;
        try {
            const userData = await userRepository.create(req.user._id, { name, address, email, dob, mob, hobbies, role });
            const message = 'Trainee added successfully';
            const data = userData;
            SystemResponse.success(res, data, message);
        }
        catch (error) {
            return SystemResponse.failure(res, error, 'User is not create');
        }
    };
    list = async (req: Request, res: Response) => {
        console.log('----------Trainee List----------');
        console.log(`req.query.skip = ${req.query.skip},req.query.limit = ${req.query.limit}`);
        try {
            let sortBy;
            if (req.query.sortBy === 'email')
                sortBy = { email: 1 };
            else if (req.query.sortBy === 'name')
                sortBy = { name: 1 };
            else
                sortBy = {updatedAt: 1};
            const dataList = await userRepository.list('trainee', req.query.skip, req.query.limit, sortBy);
            console.log(dataList);
            const count = await userRepository.countTrainee();
            const message = 'Trainee List , No. of trainee:  ' + count ;
            const data = dataList;
            SystemResponse.success(res, data, message);
        }
        catch (error) {
            return SystemResponse.failure(res, error, 'User data does not exist');
        }
    };
    update = async (req, res: Response) => {
        console.log('----------Update Trainee----------');
        try {
            const value = await userRepository.update(req, req.body.id, req.body.dataToUpdate);
            if (value) {
                const message = 'Trainee Data successfully Updated';
                const data = req.body.dataToUpdate;
                SystemResponse.success(res, data, message);
            }
        }
        catch (error) {
            return SystemResponse.failure(res, error, 'User data is not Updated');
        }
    };
    delete = async(req, res: Response) => {
        console.log('----------Delete Trainee----------');
        try {
            const value = await userRepository.delete(req, req.params.id);
            if (value) {
                const message = 'Trainee Data Successfully Deleted';
                SystemResponse.success(res, req.params.id, message);
            }
        }
        catch (error) {
            return SystemResponse.failure(res, error, 'User data is not deleted');
        }

    };
}
export default Controller.getInstance();