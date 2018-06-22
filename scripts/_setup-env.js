import path from 'path';
import dotenv from 'dotenv';

export default function setupEnv() {
  dotenv.config({
    path: path.resolve(__dirname, '../.env'),
  });
}
