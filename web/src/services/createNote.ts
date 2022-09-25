import { RequestHandler } from 'express';
import { object, string, number } from 'yup';
import { ForeignKeyConstraintError } from 'sequelize';
import Note from '../repositories/Note';
import Category from '../repositories/Category';
import { InvalidCategoryIdError } from '../helpers/errors';

export const notesCreationBodySchema = object({
  name: string().required(),
  content: string().required(),
  categoryId: number().required(),
}).noUnknown();

const createNote: RequestHandler<
  any,
  any,
  { name: string; content: string; categoryId: number }
> = async (req, res, next) => {
  const category = await Category.findByPk(req.body.categoryId);

  if (category === null) {
    next(new InvalidCategoryIdError());
  } else {
    const note = await Note.create({
      name: req.body.name,
      content: req.body.content,
      categoryId: req.body.categoryId,
    });

    res.json({ id: note.id });
  }
};

export default createNote;
