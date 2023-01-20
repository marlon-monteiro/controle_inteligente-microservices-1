import { LoggerModel } from '../../../domain/model/logger';
import CreateLoggerUseCase from "../../../services/usecases/logger/create_logger_use_case";

class CreateLoggerController {
  createLoggerUseCase: CreateLoggerUseCase;

  constructor() {
    this.createLoggerUseCase = new CreateLoggerUseCase();
  }

  async create(logger: LoggerModel) {
    try {
      if (!logger.accountId || !logger.accountName || !logger.userAction) return;
      await this.createLoggerUseCase.execute(logger);
    } catch (error) {
      // ToDo: if erro, call message to notification
    }
  }
}
export default CreateLoggerController;