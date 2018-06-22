/**
 * Setup mongodb connection
 */

import mongoose from 'mongoose';

export default (url, options = {}) => {
  mongoose.Promise = global.Promise;

  const connection = null;

  /**
   * @return {Promise}
   */
  const connect = () =>
    new Promise((resolve, reject) => {
      if (connection) {
        resolve(connection);
      }

      mongoose
        .connect(
          url,
          options,
        )
        .then(() => {
          console.log(`[App] Successfully connected to ${url}! `);

          resolve(mongoose.connection);
        })
        .catch((err) => {
          reject(err);
        });
    });

  /**
   * @return {Promise}
   */
  const close = () =>
    new Promise((resolve, reject) => {
      if (!connection) {
        reject(new Error('[App] There is no mongodb connection yet'));
      }

      connection.close(() => {
        // eslint-disable-next-line
        console.log(`[App] Successfully disconnected from ${url}!`);
        resolve(true);
      });
    });

  return {
    connect,
    close,
  };
};
