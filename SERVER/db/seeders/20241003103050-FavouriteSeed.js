'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Favorites', [
      {
        userId: 1, 
        recipeId: 1, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        recipeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        recipeId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        recipeId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        recipeId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        recipeId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        recipeId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        recipeId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        recipeId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        recipeId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Favorites', null, {});
  }
};
