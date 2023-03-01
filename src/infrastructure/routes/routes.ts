
import {Router} from 'express';
import CreateLoggerController from '../../presentation/controllers/logger/create_logger_controller';

const routes = Router();


routes.get('/log/:id', new CreateLoggerController().ListAllLogs);

export default routes;