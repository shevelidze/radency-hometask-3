import { RequestHandler } from 'express';
import Note from '../repositories/Note';

const getNote: RequestHandler = (req, res) => {
  res.end();
};

export default getNote;
