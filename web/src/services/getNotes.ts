import { RequestHandler } from 'express';
import Note from '../repositories/Note';

const getNotes: RequestHandler = (req, res) => {
  res.json({
    notes: Note.getAll().map((note) => ({
      id: note.id,
    })),
  });
};

export default getNotes;
