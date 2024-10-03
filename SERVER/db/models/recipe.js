'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    
    static associate({ User, Favorite}) {
     this.belongsTo(User, {
       foreignKey: 'userId'
       });

       this.belongsToMany(User, {
        through: Favorite,
        foreignKey: 'recipeId',
      })
    }
  }
  Recipe.init({
    title: DataTypes.STRING,
    img: DataTypes.STRING,
    servings: DataTypes.INTEGER,
    readyInMinutes: DataTypes.INTEGER,
    instructions: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    },
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};