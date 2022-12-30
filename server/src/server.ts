import cors from 'cors';
import morgan from 'morgan';
import * as http from 'http';
import express from 'express';
import { config } from 'dotenv';
import { Server } from 'socket.io';

config();

const app = express();

if (process.env['NODE_ENV'] == 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  socket.on('message', (data: string) => {
    // AI handle message here

    socket.emit('response', 'Hello world');
  });
});

server.listen(process.env.PORT, () => {
  console.log('App listen on port ' + process.env.PORT);
});
