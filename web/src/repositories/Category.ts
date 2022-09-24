import { Model, DataTypes } from 'sequelize';
import sequelize from '../configs/sequelize';

export default class Category extends Model {
  declare id: number;
  declare name: string;
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
