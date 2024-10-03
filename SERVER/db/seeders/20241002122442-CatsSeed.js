'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Вставка начальных данных в таблицу Cats
    await queryInterface.bulkInsert('Cats', [
      {
        name: 'Whiskers',
        breed: 'Siamese',
        userId: 1, // Предполагаем, что в таблице Users уже есть пользователь с id = 1
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Garfield',
        breed: 'Persian',
        userId: 2, // Предполагаем, что в таблице Users уже есть пользователь с id = 2
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tom',
        breed: 'Maine Coon',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    // Удаление всех записей из таблицы Cats
    await queryInterface.bulkDelete('Cats', null, {});
  }
};
