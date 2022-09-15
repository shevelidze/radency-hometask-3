import { RequestHandler } from 'express';
import { object, string, boolean } from 'yup';
import Note, { InvalidNoteIdError } from '../repositories/Note';
import Category from '../repositories/Category';

export const notesEditionBodySchema = object({
  name: string(),
  content: string(),
  categoryId: string().oneOf(Category.getAll().map((category) => category.id)),
  isArchived: boolean(),
}).noUnknown();

const editNote: RequestHandler = (req, res) => {
  try {
    const note = new Note(req.params.id);

    for (const editionKey in req.body) {
      note[editionKey] = req.body[editionKey];
    }

    note.save();
  } catch (e) {
    if (e instanceof InvalidNoteIdError) res.status(404);
    else throw e;
  }

  res.end();
};

export default editNote;
