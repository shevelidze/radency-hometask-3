import { RequestHandler } from 'express';
import Note from '../repositories/Note';

const getNotes: RequestHandler = (req, res) => {
  res.json({
    notes: Note.getAll().map((note) => ({
      id: note.id,
      name: note.name,
      content: note.content,
      category: note.category,
      creationDate: note.creationDate,
      isArchived: note.isArchived,
    })),
  });
};

export default getNotes;
