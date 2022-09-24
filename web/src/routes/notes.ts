import { Router, json } from 'express';
import createNote, { notesCreationBodySchema } from '../services/createNote';
import deleteNote from '../services/deleteNote';
import editNote, { notesEditionBodySchema } from '../services/editNote';
import getNotes from '../services/getNotes';
import getNote from '../services/getNote';
import getStatistics from '../services/getStatistics';
import generateValidationMiddleware from '../services/validationMiddleware';

const notesRouter = Router();

notesRouter.get('/', getNotes);
notesRouter.get('/stats', getStatistics);

notesRouter.post(
  '/',
  json(),
  generateValidationMiddleware(notesCreationBodySchema),
  createNote
);
notesRouter.delete('/:id', deleteNote);
notesRouter.patch(
  '/:id',
  json(),
  generateValidationMiddleware(notesEditionBodySchema),
  editNote
);
notesRouter.get('/:id', getNote);

export default notesRouter;
