'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class brow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      bronzer.belongsTo(models.face, { foreignKey: '' })
    }
  }
  brow.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    photo_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'brow',
    tableName: 'brows'
  });
  return brow;
};