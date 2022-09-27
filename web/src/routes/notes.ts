import { Router, json } from 'express';
import createNote, { notesCreationBodySchema } from '../controllers/createNote';
import deleteNote, {
  noteDeletionParamsSchema,
} from '../controllers/deleteNote';
import editNote, {
  noteEditionBodySchema,
  noteEditionParamsSchema,
} from '../controllers/editNote';
import getNotes from '../controllers/getNotes';
import getNote, { noteGettingParamsSchema } from '../controllers/getNote';
import getStatistics from '../controllers/getStatistics';
import generateValidationMiddleware from '../controllers/validationMiddleware';

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
  generateValidationMiddleware({ paramsSchema: noteDeletionParamsSchema }),
  deleteNote
);
notesRouter.patch(
  '/:id',
  json(),
  generateValidationMiddleware({
    paramsSchema: noteEditionParamsSchema,
    bodySchema: noteEditionBodySchema,
  }),
  editNote
);
notesRouter.get(
  '/:id',
  generateValidationMiddleware({ paramsSchema: noteGettingParamsSchema }),
  getNote
);

export default notesRouter;
