import app from './app';

const port = 4000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on ${port}`);
});
