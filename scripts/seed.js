import setupEnv from './_setup-env';
import setupDB from '../api/src/models/setup';
import seed from '../api/src/migrations/seed';

setupEnv();

const db = setupDB(process.env.MONGO_URL, {
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PASSWORD,
});

db.connect().then((connection) => {
  seed.posts.forEach((post) => {
    connection.collection('posts').insert(post);
  });

  connection.close();
});
