import { PaginateResult } from "mongoose";
import { LoggerModel } from "../../../domain/model/logger";

interface ICreateLogger {
  listAllLogs(
    action: string | undefined,
    startDate: string | undefined,
    endDate: string | undefined,
    proprietaryId?: string,
    currentPage?: string
  ): Promise<Array<LoggerModel>>;
}
export default ICreateLogger;