import {
  Table,
  Model,
  Column,
  AutoIncrement,
  PrimaryKey,
  HasMany,
} from 'sequelize-typescript';
import { Note } from './note.model';

@Table({
  modelName: 'category',
  underscored: true,
})
export class Category extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;
  @Column
  name: string;
  @HasMany(() => Note)
  notes: Note[];
}
