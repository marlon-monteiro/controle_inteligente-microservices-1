import { PaginateResult } from "mongoose";
import { LoggerModel } from "../../../domain/model/logger";
import loggerSchema from '../../database/schemas/logger'
import ICreateLogger from "./i_create_logger";

class CreateLoggerDataAccess implements ICreateLogger {
  async listAllLogs(
    action: string | undefined,
    startDate: string | undefined,
    endDate: string | undefined,
    proprietaryId: string,
    currentPage: string
  ): Promise<Array<LoggerModel>> {
    var perPage = 100
    const page = Math.max(0, Number(currentPage))
    try {
      const data = await loggerSchema.find({
        $and: [
          {
            proprietary: proprietaryId
          },
          startDate || endDate ? {
            day: {
              $gte: {
                $regex: new RegExp("^" + startDate),
              } || {
                $regex: new RegExp("^" + endDate),
              },
              $lte: {
                $regex: new RegExp("^" + endDate),
              } || {
                $regex: new RegExp("^" + startDate),
              },
            }
          } : {},
          action ? {
            userAction: action,
          } : {},
        ]
      }).limit(perPage)
      .skip(perPage * page).sort({ dateTime: -1 });

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

