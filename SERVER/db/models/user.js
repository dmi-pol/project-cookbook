'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate({ Recipe }) {
      this.hasMany(Recipe, {
        foreignKey: 'userId'
      })
    }
  }
  User.init({
    name: {type: DataTypes.STRING,
    allowNull: false},
    email: {
      type: DataTypes.STRING,
      unique: true,
    validate: {
      isEmail: true 
}
    },
    password: { 
      type: DataTypes.STRING,
    allowNull: false} , 
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};