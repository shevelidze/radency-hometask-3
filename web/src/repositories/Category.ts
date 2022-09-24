import { Model, DataTypes } from 'sequelize';

import type {
  InferAttributes,
  InferCreationAttributes,
  NonAttribute,
} from 'sequelize';
import sequelize from '../configs/sequelize';
import Note from './Note';

export default class Category extends Model<
  InferAttributes<Category>,
  InferCreationAttributes<Category>
> {
  declare id: number;
  declare name: string;
  declare notes: NonAttribute<Note[]>;
}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    modelName: 'category',
    sequelize,
    timestamps: false,
    underscored: true,
  }
);
