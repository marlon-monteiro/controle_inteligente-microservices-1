import { Request , Response} from 'express';
import { LoggerModel } from '../../../domain/model/logger';
import CreateLoggerTranslate from '../../../infrastructure/data-access/create_logger/translates/translate';
import CreateLoggerUseCase from "../../../services/usecases/logger/create_logger_use_case";

class CreateLoggerController {
  async create(logger: LoggerModel) {
    try {
      if (!logger.accountId || !logger.accountName || !logger.userAction || !logger.day || !logger.hour || !logger.dateTime) return;
      const createLoggerUseCase = new CreateLoggerUseCase();
      await createLoggerUseCase.execute(logger);
    } catch (error) {
      throw(error);
    }
  }
  async ListAllLogs(request: Request, response: Response) {
    try {
      const { page, perPage, action, startDate, endDate} = request.query;
      const createLoggerUseCase = new CreateLoggerUseCase();
      const data = await createLoggerUseCase.listAllLogs(page?.toString()!, perPage?.toString()!, action?.toString()!, startDate?.toString()!, endDate?.toString()!);
      const payload = await new CreateLoggerTranslate().loggerByGroup(data);

      return response.status(200).json({ data: payload.reverse() });
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}
export default  CreateLoggerController;