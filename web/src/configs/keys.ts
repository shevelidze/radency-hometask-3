const databaseUrl =
  process.env.DATABASE_URL ||
  'postgres://postgres:mysecretpassword@postgres:5432/notes';

export { databaseUrl };
