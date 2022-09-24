import express from 'express';
import serverConfig from './configs/server';
import notesRouter from './routes/notes';

const app = express();

app.use('/notes', notesRouter);

app.listen(serverConfig.port, () => {
  console.log('The API server is running...');
});
