import Server from './infrastructure/server';

const server = new Server();

server.express.listen(process.env.PORT || 8085);
