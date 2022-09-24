import { Model, DataTypes } from 'sequelize';
import sequelize from '../configs/sequelize';
import Category from './Category';

export default class Note extends Model {
  declare id: number;
  declare name: string;
  declare content: string;
  declare categoryId: number;
  declare isArchived: boolean;
  declare createdAt: Date;
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

Note.belongsTo(Category);
