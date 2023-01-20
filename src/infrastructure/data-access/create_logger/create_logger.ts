import { LoggerModel } from "../../../domain/model/logger";
import loggerSchema from '../../database/schemas/logger'

class CreateLoggerDataAccess {
  async execute(payload: LoggerModel): Promise<void> {
    try {
      await new loggerSchema(payload).save();
    } catch (error) {
      throw(error);
    }
  }
}
export default CreateLoggerDataAccess;