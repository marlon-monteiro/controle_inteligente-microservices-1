import { PaginateResult } from "mongoose";
import { LoggerModel } from "../../../domain/model/logger";

interface ICreateLogger {
  listAllLogs(page: string, perPage: string, action: string | undefined): Promise<PaginateResult<LoggerModel & { _id: any; }>>;
}
export default ICreateLogger;