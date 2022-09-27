import { RequestHandler } from 'express';
import { object, number } from 'yup';
import { WebApiError } from '../helpers/errors';
import Note from '../repositories/Note';

export const noteDeletionParamsSchema = object({
  id: number().required(),
}).noUnknown();

const deleteNote: RequestHandler<{ id: string }> = async (req, res, next) => {
  const note = await Note.findByPk(parseInt(req.params.id));

  if (note === null) next(new WebApiError(404));
  else {
    await note.destroy();
    res.end();
  }
};

export default deleteNote;
