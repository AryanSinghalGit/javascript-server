import { Router } from 'express';
import controller from './Controller';
import { validationHandler, authMiddleWare } from '../../libs/routes';
import { default as validation } from './validation';
const traineeRouter: Router = Router();
traineeRouter.route('/')
    /**
     * @swagger
     *
     * /api/trainee:
     *   get:
     *     description: Returns the list of the trainees
     *     security:
     *       - Bearer: []
     *     consumes:
     *       - application/json
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Trainee List
     *         schema:
     *              allOf:
     *              properties:
     *                  status:
     *                      example: Ok
     *                  message:
     *                      example: 'Trainee List , No. of trainee:  2'
     *                  count:
     *                      example: 2
     *                  data:
     *                      type: object
     *                      allOf:
     *                              - $ref: '#/definitions/TraineeResponse'
     *       403:
     *         description: unauthorised access
     */
    .get(authMiddleWare('traineeModule', 'read'), validationHandler(validation.get), controller.list)
    /**
     * @swagger
     *
     *  definitions:
     *      TraineePost:
     *        type: object
     *        properties:
     *          email:
     *              type: string
     *              example: aryan.singhal@successive.tech
     *          name:
     *              type: string
     *              example: aryan singhal
     *          password:
     *              type: string
     *              example: training@123
     *          mob:
     *              type: number
     *              example: "9811422797"
     *          address:
     *              type: string
     *              example: Ghaziabad
     *          dob:
     *              type: Date
     *              example: 06/07/1998
     *          role:
     *              type: string
     *              example: trainee
     *          hobbies:
     *              type: array
     *              example: ["singing", "hiking"]
     *
     *      TraineeResponse:
     *        type: object
     *        properties:
     *          _id:
     *              example: 5e4e6e93c095d84d34045a30
     *          email:
     *              type: string
     *              example: aryan.singhal@successive.tech
     *          name:
     *              type: string
     *              example: Aryan Singhal
     *          mob:
     *              type: number
     *              example: "9811422797"
     *          address:
     *              type: string
     *              example: Ghaziabad
     *          dob:
     *              type: Date
     *              example: 06/07/1998
     *          role:
     *              type: string
     *              example: trainee
     *          hobbies:
     *              type: array
     *              example: ["singing", "hiking"]
     *          originalId:
     *              example: 5e4e6e93c095d84d34045a30
     *          createdBy:
     *              example: 5e45404398e86d576ad964e6
     *          createdAt:
     *              example: 2020-02-20T11:33:39.325Z
     *          v:
     *              example:0
     *
     */




    /**
     * @swagger
     *
     * /api/trainee:
     *   post:
     *     description: Returns the success reponse on creation
     *     security:
     *          - Bearer: []
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: User
     *         description: User's Data.
     *         in: body
     *         required: true
     *         type: object
     *         schema:
     *             $ref: '#/definitions/TraineePost'
     *     responses:
     *       200:
     *         description: User created successfully
     *         schema:
     *              allOf:
     *              properties:
     *                  status:
     *                      example: Ok
     *                  message:
     *                      example: Trainee successfully created
     *                  data:
     *                      type: object
     *                      allOf:
     *                          - $ref: '#/definitions/TraineeResponse'
     *                      properties:
     *                              password:
     *                                  type: string
     *                                  example: "*****"
     *       403:
     *         description: unauthorised access
     */
    .post(authMiddleWare('traineeModule', 'write'), validationHandler(validation.create), controller.create)

    /**
     * @swagger
     *
     * /api/trainee:
     *   put:
     *     description: Returns the success reponse on creation
     *     security:
     *          - Bearer: []
     *     produces:
     *       - application/json
     *     schema:
     *      allOf:
     *          properties:
     *              allOf:
     *              id:
     *                  type: string
     *                  example: 5e4e6e93c095d84d34045a30
     *              dataToUpdate:
     *                  type: object
     *                  allOf:
     *                      $ref: '#/definitions/TraineePost'
     *     responses:
     *       200:
     *         description: user data successfully updated
     *       403:
     *         description: unauthorised access
     */
    .put(authMiddleWare('traineeModule', 'write'), validationHandler(validation.update), controller.update);
/**
 * @swagger
 *
 * /api/trainee/{id}:
 *   delete:
 *     description: Returns the success reponse on creation
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of user to be deleted.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 *       403:
 *         description: unauthorised access
 */
traineeRouter.route('/:id')
    .delete(authMiddleWare('traineeModule', 'delete'), validationHandler(validation.delete), controller.delete);
export default traineeRouter;