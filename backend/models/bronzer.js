'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bronzer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      bronzer.belongsTo(models.face, { foreignKey: '' })
    }
  }
  bronzer.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    photo_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'bronzer',
    tableName: 'bronzers'
  });
  return bronzer;
};