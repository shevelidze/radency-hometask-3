import { RequestHandler } from 'express';
import Category from '../repositories/Category';
import Note from '../repositories/Note';

const getStatistics: RequestHandler = async (req, res) => {
  const categories = await Category.findAll({
    include: { model: Note, attributes: ['isArchived'] },
  });
  res.json({
    statistics: categories.map((category) => {
      return {
        id: category.id,
        name: category.name,
        archived: category.notes.filter((note) => note.isArchived).length,
        active: category.notes.filter((note) => !note.isArchived).length,
      };
    }),
  });
  res.end();
};

export default getStatistics;
