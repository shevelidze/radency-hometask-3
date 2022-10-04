import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  CreatedAt,
  BelongsTo,
} from 'sequelize-typescript';
import { Category } from './category.model';

@Table({
  modelName: 'note',
  underscored: true,
})
export class Note extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;
  @Column
  name: string;
  @Column
  content: string;
  @Column({ defaultValue: false })
  isArchived: boolean;
  @CreatedAt
  createdAt: Date;
  @BelongsTo(() => Category)
  category: Category;
}
