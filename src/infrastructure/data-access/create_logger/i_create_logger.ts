import { PaginateResult } from "mongoose";
import { LoggerModel } from "../../../domain/model/logger";

interface ICreateLogger {
  listAllLogs(
    action: string | undefined,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Array<LoggerModel>>;
}
export default ICreateLogger;