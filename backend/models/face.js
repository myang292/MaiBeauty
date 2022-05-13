'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class face extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      face.hasMany(models.foundation, { foreignKey: '' })
      face.hasMany(models.brow, { foreignKey: '' })
      face.hasMany(models.bronzer, { foreignKey: '' })
    }
  }
  face.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'face',
    tableName: 'faces'
  });
  return face;
};