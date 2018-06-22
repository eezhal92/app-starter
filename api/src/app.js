import cors from 'cors';
import express from 'express';

import add from './add';
import { Post } from './models';

const app = express();

app.use(cors({
  origin: '*',
}));

app.get('/', (request, response) => {
  response.json({
    message: `Hello ${add(2, 3)}`,
  });
});

app.get('/posts', (request, response) => {
  Post.find({}).then((posts) => {
    response.json({
      posts,
    });
  });
});

export default app;
