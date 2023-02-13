import { PaginateResult } from "mongoose";
import { LoggerModel } from "../../../domain/model/logger";
import loggerSchema from '../../database/schemas/logger'
import ICreateLogger from "./i_create_logger";

class CreateLoggerDataAccess implements ICreateLogger {
  async listAllLogs(
    action: string | undefined,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Array<LoggerModel>> {
    try {
      const data = await loggerSchema.find({
        $and: [
          startDate || endDate ? {
            day: {
              $gte: startDate || endDate,
              $lte: endDate || startDate,
            }
          } : {},
          action ? {
            userAction: action,
          } : {},
        ]
      }).sort();
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