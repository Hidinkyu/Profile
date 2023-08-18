import express from 'express';
import { errorHandler } from './error/errorHandler';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
