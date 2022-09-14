import { Router, json as parseJSON } from 'express';
import createNote from '../services/createNote';
import deleteNote from '../services/deleteNote';
import editNote from '../services/editNote';
import getNotes from '../services/getNotes';
import getNote from '../services/getNote';
import getStatistics from '../services/getStatistics';

const notesRouter = Router();

notesRouter.post('/', parseJSON, createNote);
notesRouter.delete('/:id', deleteNote);
notesRouter.patch('/:id', parseJSON, editNote);
notesRouter.get('/', getNotes);
notesRouter.get('/:id', getNote);
notesRouter.get('/stats', getStatistics);

export default notesRouter;
