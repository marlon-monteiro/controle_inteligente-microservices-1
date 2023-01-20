import { LoggerModel } from '../../model/logger';

interface ICreateLoggerUseCase { 
  execute(logger: LoggerModel): Promise<void>; 
}

export default ICreateLoggerUseCase;