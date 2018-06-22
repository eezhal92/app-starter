import app from './app';
import setup from './models/setup';

const port = process.env.API_PORT || 4000;
const db = setup(process.env.MONGO_URL, {
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PASSWORD,
});

db.connect().then(() => {
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`[App] Web Api Server Running on http://localhost:${port}`);
  });
});
