import { RequestHandler } from 'express';
import Category from '../repositories/Category';
import Note from '../repositories/Note';

const getStatistics: RequestHandler = (req, res) => {
  const notes = Note.getAll();

  const activeNotes = notes.filter((note) => !note.isArchived);
  const archivedNotes = notes.filter((note) => note.isArchived);

  res.json({
    statistics: Category.getAll().map((category) => ({
      category,
      activeNotesNumber: activeNotes.filter(
        (note) => note.categoryId === category.id
      ).length,
      archivedNotesNumber: archivedNotes.filter(
        (note) => note.categoryId === category.id
      ).length,
    })),
  });
};

export default getStatistics;
