import { RequestHandler } from 'express';
import { object, string } from 'yup';
import Category from '../repositories/Category';
import Note from '../repositories/Note';

export const notesCreationBodySchema = object({
  name: string().required(),
  content: string().required(),
  // categoryId: string()
  //   .oneOf(Category.getAll().map((category) => category.id))
  //   .required(),
}).noUnknown();

const createNote: RequestHandler = (req, res) => {
  res.end();
};

export default createNote;
