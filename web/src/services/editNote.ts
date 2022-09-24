import { RequestHandler } from 'express';
import { object, string, boolean } from 'yup';
import Note from '../repositories/Note';

export const notesEditionBodySchema = object({
  name: string(),
  content: string(),
  // categoryId: string().oneOf(Category.getAll().map((category) => category.id)),
  isArchived: boolean(),
}).noUnknown();

const editNote: RequestHandler = (req, res) => {
  res.end();
};

export default editNote;
