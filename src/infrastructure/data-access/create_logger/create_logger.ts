import { PaginateResult } from "mongoose";
import { LoggerModel } from "../../../domain/model/logger";
import loggerSchema from '../../database/schemas/logger'
import ICreateLogger from "./i_create_logger";

class CreateLoggerDataAccess implements ICreateLogger {
  async listAllLogs(page: string, perPage: string, action: string | undefined): Promise<PaginateResult<LoggerModel & { _id: any; }>>  {
    try {
      const options = {
        sort: 'dateTime',
        page: parseInt(String(page), 10) || 1,
        limit: parseInt(String(perPage), 10) || 10,
      };
      const data = await loggerSchema.paginate({
        $and: [
          action ? {
            userAction: action,
          } : {},
        ]
      }, options);
      return data;
    } catch (error) {
      throw (error);
    }
  }
  async execute(payload: LoggerModel): Promise<void> {
    try {
      await new loggerSchema(payload).save();
    } catch (error) {
      throw(error);
    }
  }
}
export default CreateLoggerDataAccess;