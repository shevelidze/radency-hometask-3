import { RequestHandler } from 'express';
import { object, string, boolean, number } from 'yup';
import { ForeignKeyConstraintError } from 'sequelize';
import { WebApiError, InvalidCategoryIdError } from '../helpers/errors';
import Note from '../repositories/Note';

export const noteEditionParamsSchema = object({
  id: number().required(),
}).noUnknown();

export const noteEditionBodySchema = object({
  name: string(),
  content: string(),
  categoryId: number(),
  isArchived: boolean(),
}).noUnknown();

const editNote: RequestHandler<
  { id: string },
  any,
  { name?: string; content?: string; categoryId?: string; isArchived?: boolean }
> = async (req, res, next) => {
  const note = await Note.findByPk(parseInt(req.params.id));

  if (note === null) next(new WebApiError(404));
  else {
    try {
      Object.assign(note, req.body);
      await note.save();
      res.end();
    } catch (e) {
      if (e instanceof ForeignKeyConstraintError) {
        next(new InvalidCategoryIdError());
      } else next(e);
    }
  }
};

export default editNote;
