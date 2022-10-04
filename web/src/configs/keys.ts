const databaseUrl =
  process.env.DATABASE_URL ||
  'postgres://postgres:mysecretpassword@localhost:5432/notes';

export { databaseUrl };
