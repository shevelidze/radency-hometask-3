import { RequestHandler } from 'express';
import Note from '../repositories/Note';

const deleteNote: RequestHandler = (req, res) => {
  res.end();
};

export default deleteNote;
