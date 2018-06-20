import cors from 'cors';
import express from 'express';

import add from './add';

const app = express();

app.use(cors({
  origin: '*',
}));

app.get('/', (request, response) => {
  response.json({
    message: `Hello ${add(2, 3)}`,
  });
});

export default app;
