import express from 'express';

import ClassesControler from './controllers/ClassesControler';
import ConnectionsControllers from './controllers/ConnectionsControllers';
import AuthContollers from './controllers/AuthControler';

const routes = express.Router();

const classesControllers = new ClassesControler();
const connectionsControllers = new ConnectionsControllers();
const authController = new AuthContollers();

routes.post('/classes',classesControllers.create);
routes.get('/classes',classesControllers.index);

routes.post('/connections',connectionsControllers.create);
routes.get('/connections',connectionsControllers.index);

routes.post('/auth/login',authController.login);
routes.post('/auth/register',authController.register);

export default routes