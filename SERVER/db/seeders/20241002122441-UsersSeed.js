'use strict';
const bcrypt = require('bcrypt'); // Импорт библиотеки bcrypt

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Генерация захешированных паролей
    const hashedPassword1 = await bcrypt.hash('123456', 10);
    const hashedPassword2 = await bcrypt.hash('password123', 10);
    const hashedPassword3 = await bcrypt.hash('alicepass', 10);

    // Вставка начальных данных в таблицу Users
    await queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: hashedPassword1, // Захешированный пароль
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        password: hashedPassword2, // Захешированный пароль
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        password: hashedPassword3, // Захешированный пароль
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    // Удаление всех записей из таблицы Users
    await queryInterface.bulkDelete('Users', null, {});
  }
};
