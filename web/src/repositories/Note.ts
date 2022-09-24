import { Model, DataTypes } from 'sequelize';
import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  NonAttribute,
  ForeignKey,
} from 'sequelize';
import sequelize from '../configs/sequelize';
import Category from './Category';

export default class Note extends Model<
  InferAttributes<Note>,
  InferCreationAttributes<Note>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare content: string;
  declare categoryId: ForeignKey<Category['id']>;
  declare isArchived: boolean;
  declare createdAt: NonAttribute<Date>;
}

Note.init(
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
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isArchived: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'note',
    updatedAt: false,
    underscored: true,
  }
);

Category.hasMany(Note);
Note.belongsTo(Category);
