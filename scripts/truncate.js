import setupEnv from './_setup-env';
import setupDB from '../api/src/models/setup';
import seed from '../api/src/migrations/seed';

setupEnv();

const db = setupDB(process.env.MONGO_URL, {
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PASSWORD,
});

db.connect().then(async (connection) => {
  try {
    const results = [];

    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (const collectionName in connection.collections) {
      const collection = connection.collections[collectionName];

      results.push(collection.collection.remove());
    }

    await Promise.all(results);
  } catch (err) {
    // eslint-disable-next-line
    console.log('Error when attempting to clear mongo collections', err);
  }

  connection.close();
});
