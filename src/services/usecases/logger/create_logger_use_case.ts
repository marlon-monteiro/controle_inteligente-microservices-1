import { PaginateResult } from "mongoose";
import { LoggerModel } from "../../../domain/model/logger";
import ICreateLoggerUseCase from "../../../domain/usecases/logger/I_create_logger_use_case";
import CreateLoggerDataAccess from "../../../infrastructure/data-access/create_logger/create_logger";

class CreateLoggerUseCase implements ICreateLoggerUseCase {
  private createLoggerDataAccess: CreateLoggerDataAccess
  
  constructor () {
    this.createLoggerDataAccess = new CreateLoggerDataAccess();
  }
  async listAllLogs(
    action: string | undefined,
    startDate: string | undefined,
    endDate: string | undefined
    ): Promise<Array<LoggerModel>> {
    return await this.createLoggerDataAccess.listAllLogs(action, startDate, endDate);
  }

  async execute(payload: LoggerModel): Promise<void> {
    await this.createLoggerDataAccess.execute(payload)
    CreateLoggerDataAccess
  }
}
export default CreateLoggerUseCase;