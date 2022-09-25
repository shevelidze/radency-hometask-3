import { Router, json } from 'express';
import createNote, { notesCreationBodySchema } from '../services/createNote';
import deleteNote, { deleteNoteParamsSchema } from '../services/deleteNote';
import editNote, { notesEditionBodySchema } from '../services/editNote';
import getNotes from '../services/getNotes';
import getNote, { getNoteParamsSchema } from '../services/getNote';
import getStatistics from '../services/getStatistics';
import generateValidationMiddleware from '../services/validationMiddleware';

const notesRouter = Router();

notesRouter.get('/', getNotes);
notesRouter.get('/stats', getStatistics);

notesRouter.post(
  '/',
  json(),
  generateValidationMiddleware({ bodySchema: notesCreationBodySchema }),
  createNote
);
notesRouter.delete(
  '/:id',
  generateValidationMiddleware({ paramsSchema: deleteNoteParamsSchema }),
  deleteNote
);
notesRouter.patch(
  '/:id',
  json(),
  generateValidationMiddleware({ bodySchema: notesEditionBodySchema }),
  editNote
);
notesRouter.get(
  '/:id',
  generateValidationMiddleware({ paramsSchema: getNoteParamsSchema }),
  getNote
);

export default notesRouter;
