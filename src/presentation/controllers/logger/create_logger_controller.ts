import { Request, Response } from 'express';
import { LoggerModel } from '../../../domain/model/logger';;
import CreateLoggerUseCase from "../../../services/usecases/logger/create_logger_use_case";

class CreateLoggerController {
  async create(logger: LoggerModel) {
    try {
      if (
        !logger.accountId ||
        !logger.accountName ||
        !logger.userAction ||
        !logger.dateTime ||
        !logger.proprietary
      ) return;
      const createLoggerUseCase = new CreateLoggerUseCase();
      await createLoggerUseCase.execute(logger);
    } catch (error) {
      throw (error);
    }
  }
  async ListAllLogs(request: Request, response: Response) {
    try {
      const { id: proprietary } = request.params;
      const { action, startDate, endDate,  currentPage } = request.query;
      const createLoggerUseCase = new CreateLoggerUseCase();

      const data = await createLoggerUseCase.listAllLogs(action?.toString()!, startDate?.toString()!, endDate?.toString()!, proprietary as string, currentPage as string);

      return response.status(200).json({ data });
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}
export default CreateLoggerController;