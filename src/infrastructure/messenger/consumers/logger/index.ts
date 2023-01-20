import amqplib from 'amqplib';
import { LoggerModel } from '../../../../domain/model/logger'
import CreateLoggerController from '../../../../presentation/controllers/logger/create_logger_controller';

class LoggerConsumer {
  private queue: string;
  private connection: amqplib.Connection;
  private createLoggerController: CreateLoggerController; 

  constructor(connection: amqplib.Connection) {
    this.createLoggerController = new CreateLoggerController();
    this.queue = "create_logger";
    this.connection = connection;
    this.loggerConsumer();
  }

  private async loggerConsumer() {
    const channel = await this.connection.createChannel();
    await channel.assertQueue(this.queue);

    channel.consume(this.queue, async (msg) => {
      if (msg !== null) {
        const payload: LoggerModel = JSON.parse(msg.content.toString());
        await this.createLoggerController.create(payload);
        channel.ack(msg);
      }
    });
  }
}
export default LoggerConsumer;