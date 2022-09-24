import { RequestHandler } from 'express';
import Note, { InvalidNoteIdError } from '../repositories/Note';

const deleteNote: RequestHandler = (req, res) => {
  try {
    new Note(req.params.id).delete();
  } catch (e) {
    if (e instanceof InvalidNoteIdError) {
      res.status(404);
    } else throw e;
  }

  res.end();
};

export default deleteNote;
