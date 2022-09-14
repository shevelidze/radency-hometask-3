import express from 'express';
import serverConfig from './configs/server';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello world!' });
});

app.listen(serverConfig.port, () => {
  console.log('The API server is running...');
});
