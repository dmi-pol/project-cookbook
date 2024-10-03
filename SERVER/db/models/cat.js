"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cat extends Model {
    static associate({ User }) {
      this.belongsTo(User, {
        foreignKey: "userId",
      });
    }
  }
  Cat.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      breed: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Cat",
    }
  );
  return Cat;
};
