import { LoggerModel } from "../../../domain/model/logger";
import ICreateLoggerUseCase from "../../../domain/usecases/logger/I_create_logger_use_case";
import CreateLoggerDataAccess from "../../../infrastructure/data-access/create_logger/create_logger";

class CreateLoggerUseCase implements ICreateLoggerUseCase {
  private createLoggerDataAccess: CreateLoggerDataAccess
  
  constructor () {
    this.createLoggerDataAccess = new CreateLoggerDataAccess();
  }

  async execute(payload: LoggerModel): Promise<void> {
    await this.createLoggerDataAccess.execute(payload)
    CreateLoggerDataAccess
  }
}
export default CreateLoggerUseCase;