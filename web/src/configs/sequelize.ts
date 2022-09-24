import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const databaseUrl = process.env.DATABASE_URL;

if (databaseUrl === undefined)
  throw new Error(
    'Failed to load a database url. Please, check your environment.'
  );

const sequelize = new Sequelize(databaseUrl);

sequelize.authenticate().then(
  () =>
    console.log(
      'Connection to the database has been established successfully.'
    ),
  (e) => {
    throw e;
  }
);

export default sequelize;
