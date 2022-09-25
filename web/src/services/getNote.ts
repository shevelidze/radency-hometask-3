import { RequestHandler } from 'express';
import { object, number } from 'yup';
import Note from '../repositories/Note';
import Category from '../repositories/Category';
import { WebApiError } from '../helpers/errors';

export const noteGettingParamsSchema = object({
  id: number().required(),
}).noUnknown();

const getNote: RequestHandler<{ id: string }> = async (req, res, next) => {
  const note = await Note.findByPk(req.params.id, {
    attributes: { exclude: ['categoryId'] },
    include: Category,
  });

  if (note === null) next(new WebApiError(404));
  else res.json(note);
};

export default getNote;
