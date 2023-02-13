import { PaginateResult } from "mongoose";
import { LoggerModel } from "../../../domain/model/logger";
import loggerSchema from '../../database/schemas/logger'
import ICreateLogger from "./i_create_logger";

class CreateLoggerDataAccess implements ICreateLogger {
  async listAllLogs(
    page: string,
    perPage: string,
    action: string | undefined,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Array<LoggerModel>> {
    try {
      const data = await loggerSchema.find({}).sort();
      return data;
    } catch (error) {
      throw (error);
    }
  }
  async execute(payload: LoggerModel): Promise<void> {
    try {
      await new loggerSchema(payload).save();
    } catch (error) {
      throw (error);
    }
  }
}
export default CreateLoggerDataAccess;