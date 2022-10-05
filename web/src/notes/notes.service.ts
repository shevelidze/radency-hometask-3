import { Injectable } from '@nestjs/common';
import { Note } from './models/note.model';
import { Category } from './models/category.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateNoteDto } from './dtos/create-note.dto';
import { UpdateNoteDto } from './dtos/update-note.dto';

export class NotesServiceError extends Error {}

export class NonExistingDeletingError extends NotesServiceError {
  constructor() {
    super('Deleting of a non-existing note.');
  }
}

export class NonExistingUpdatingError extends NotesServiceError {
  constructor() {
    super('Updating of a non-existing note.');
  }
}

export class InvalidCategoryIdError extends NotesServiceError {
  constructor() {
    super('Invalid category id.');
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
  getOne(id: number): Promise<Note | null> {
    return this.noteModel.findByPk(id, {
      include: [
        {
          model: Category,
        },
      ],
      attributes: { exclude: ['categoryId'] },
    });
  }
  async add(values: CreateNoteDto) {
    await this.checkIfCategoryExists(values.categoryId);
    return (await new this.noteModel(values).save()).id;
  }
  async update(id: number, values: UpdateNoteDto) {
    const note = await this.noteModel.findByPk(id);
    if (note === null) throw new NonExistingUpdatingError();
    if (values.categoryId !== undefined)
      await this.checkIfCategoryExists(values.categoryId);
    Object.assign(note, values);
    return await note.save();
  }
  async deleteOne(id: number) {
    const note = await this.noteModel.findByPk(id);
    if (note === null) throw new NonExistingDeletingError();
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
  private async checkIfCategoryExists(id: number) {
    if ((await this.categoryModel.findByPk(id)) === null)
      throw new InvalidCategoryIdError();
  }
}
