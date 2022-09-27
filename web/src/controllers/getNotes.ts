import { RequestHandler } from 'express';
import Note from '../repositories/Note';

const getNotes: RequestHandler = async (req, res) => {
  res.json({
    notes: await Note.findAll({
      attributes: ['id', 'name'],
    }),
  });
};

export default getNotes;
