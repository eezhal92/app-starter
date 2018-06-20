const cors = require('cors');
const express = require('express');

const app = express();
const port = 4000;

app.use(cors({
  origin: '*',
}));

app.get('/', (request, response) => {
  response.json({
    message: 'Hello',
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on ${port}`);
});
