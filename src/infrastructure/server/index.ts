import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import 'dotenv/config';
import DataBase from '../database';
import Amqp from '../messenger/rabbitMQ';
import routes from '../routes/routes';
import loggerSchema from '../database/schemas/logger'

class ServerInstance {
  public express: express.Application;

  public constructor() {
    this.initMessenger();
    this.express = express()
    this.middlewares();
    this.database();
    this.routes();
    //this.updateSchema();
  }

  async initMessenger() {
    new Amqp()
  }

  private middlewares(): void {
    this.express.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'X-Requested-With');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      next();
    });
    this.express.use(cors());
    this.express.use(helmet());
    this.express.use(express.urlencoded({
      limit: '50mb',
      extended: true,
      parameterLimit: 50000,
    }));
    this.express.use(express.json({ limit: '50mb' }));
  }

  private database(): void {
    new DataBase()
  }

  private async updateSchema() {
    // await loggerSchema.updateMany({}, { proprietary: '64024ceddc405b103bfe43f7' })
  }

  private routes() {
    this.express.use(routes);
  }
}

export default ServerInstance;
