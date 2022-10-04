import { Injectable } from '@nestjs/common';
import { Note } from './note.model';
import { Category } from './category.model';
import { InjectModel } from '@nestjs/sequelize';

export class NotesServiceError extends Error {}

export class NonExistingDeletionError extends NotesServiceError {
  constructor() {
    super('Deletion of a non-existing note.');
  }
}

@Injectable()
export class NotesService {
  constructor(
    @InjectModel(Note) private noteModel: typeof Note,
    @InjectModel(Category) private categoryModel: typeof Category,
  ) {}
  getAll() {
    return this.noteModel.findAll({ attributes: ['id', 'name'] });
  }
  getOne(id: string): Promise<Note | null> {
    return this.noteModel.findByPk(id, {
      attributes: { exclude: ['categoryId'] },
    });
  }
  async deleteOne(id: string) {
    const note = await this.noteModel.findByPk(id);
    if (note === null) throw new NonExistingDeletionError();
    await note.destroy();
  }
  async getStatistics() {
    const categories = await this.categoryModel.findAll({
      include: { model: Note, attributes: ['isArchived'] },
    });

    return categories.map((category) => {
      return {
        id: category.id,
        name: category.name,
        archived: category.notes.filter((note) => note.isArchived).length,
        active: category.notes.filter((note) => !note.isArchived).length,
      };
    });
  }
}
