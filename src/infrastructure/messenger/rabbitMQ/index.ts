import amqplib from 'amqplib';
import LoggerConsumer from '../consumers/logger';

class Amqp {
  connection: amqplib.Connection
  constructor() {
    this.initAmqp();
  }

  private async initAmqp() {
    const amqplibConnection = await amqplib.connect(process.env.RABBITMQ || "");

    this.connection = amqplibConnection;

    this.listenLogMessage(amqplibConnection)

  }
  private listenLogMessage(connection: amqplib.Connection) {
    new LoggerConsumer(connection);
  }
}
export default Amqp;