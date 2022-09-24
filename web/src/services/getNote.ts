import { RequestHandler } from 'express';
import { object, number } from 'yup';
import Note from '../repositories/Note';
import Category from '../repositories/Category';

export const getNoteParamsSchema = object({
  id: number().required(),
}).noUnknown();

const getNote: RequestHandler = async (req, res) => {
  const note = await Note.findByPk(req.params.id, {
    attributes: { exclude: ['categoryId'] },
    include: Category,
  });

  if (note === null) res.status(404).end();
  else res.json(note);
};

export default getNote;
