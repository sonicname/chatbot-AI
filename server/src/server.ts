import express, { Request, Response } from 'express';
import { config } from 'dotenv';

config();

const app = express();

app.listen(process.env.PORT, () => {
  console.log('App listen on port ' + process.env.PORT);
});
