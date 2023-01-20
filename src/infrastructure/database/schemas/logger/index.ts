import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { LoggerModel } from '../../../../domain/model/logger';

const loggerSchema = new mongoose.Schema({
  userAction: { type: 'string', required: true },
  description: { type: 'string' },
  day: { type: 'string', required: true },
  hour: { type: 'string', required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  userName: { type: 'string' },
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'accounts',
    required: true,
  },
  accountName: { type: 'string', require: true },
});

loggerSchema.plugin(mongoosePaginate);
export default mongoose.model<LoggerModel>('logger_model', loggerSchema);
