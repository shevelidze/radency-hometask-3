import express from 'express';
import serverConfig from './configs/server';
import notesRouter from './routes/notes';
import errorMiddleware from './services/errorMiddleware';

const app = express();

app.use('/notes', notesRouter);

app.use(errorMiddleware);

app.listen(serverConfig.port, () => {
  console.log('The API server is running...');
});
