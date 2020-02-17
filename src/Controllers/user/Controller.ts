import * as bcrypt from 'bcrypt';
import { Request, Response, response, NextFunction } from 'express';
import { userRepository } from '../../repositories/user';
import SystemResponse from '../../libs/SystemResponse';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';
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
            const dataList = await userRepository.list();
            console.log(dataList);
            const message = 'Trainee List';
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
    me = (req, res: Response, next: NextFunction) => {
        console.log('--------------me-------------');
        delete req.user.password;
        SystemResponse.success(res, req.user, 'User data fetched');
    }
    login = async(req , res: Response) => {
        console.log('--------------Login-------------');
        try {
        const { email, password } = req.body;
        console.log(email, password);
        const user = await userRepository.findByEmail(email);
        if (!user) {
            return SystemResponse.failure(res, 'User data not found', 'User not found', 404);
        }
        const result = await bcrypt.compare(password, user.password);
        console.log(result);
        if (!result) {
            return SystemResponse.failure(res, 'Password is incorrect', 'Password does not match', 422);
        }
        console.log('Password matched');
        const token = jwt.sign({ email: user.email , _id: user.originalId }, config.Key, { expiresIn: 900 });
        return SystemResponse.success(res, token);
        }
        catch (err) {
            console.log(err);
            return SystemResponse.failure(res, err.message);
        }
    }
}
export default Controller.getInstance();
