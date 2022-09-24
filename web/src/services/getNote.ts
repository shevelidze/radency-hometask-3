import { RequestHandler } from 'express';
import Note, { InvalidNoteIdError } from '../repositories/Note';

const getNote: RequestHandler = (req, res) => {
  try {
    const note = new Note(req.params.id);

    res.json({
      id: note.id,
      name: note.name,
      content: note.content,
      category: note.category,
      creationDate: note.creationDate,
      isArchived: note.isArchived,
    });
  } catch (e) {
    if (e instanceof InvalidNoteIdError) {
      res.status(404);
    } else throw e;
  }

  res.end();
};

export default getNote;
