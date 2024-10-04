'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {

    static associate({User, Recipe}) {
      this.belongsTo(User, {
        foreignKey: 'userId'
      });
      this.belongsTo(Recipe, {
        foreignKey: 'recipeId'
      })
    }
  }
  Favorite.init({
    userId: DataTypes.INTEGER,
    recipeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};