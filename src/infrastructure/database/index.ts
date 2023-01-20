import mongoose, { Connection } from 'mongoose';


class DataBase {
  constructor() {
    this.initDataBaseConnection();
  }

  private initDataBaseConnection() {
    const { MONGODB_STRING } = process.env
    const connectionString = MONGODB_STRING || '';
    mongoose.connect(connectionString);
  }
}
export default DataBase;