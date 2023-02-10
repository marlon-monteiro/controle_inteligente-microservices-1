import { PaginateResult } from 'mongoose';
import { LoggerModel } from '../../model/logger';

interface ICreateLoggerUseCase { 
  execute(logger: LoggerModel): Promise<void>; 
  listAllLogs(page: string, perPage: string, action: string | undefined): Promise<PaginateResult<LoggerModel & { _id: any; }>>;
}

export default ICreateLoggerUseCase;