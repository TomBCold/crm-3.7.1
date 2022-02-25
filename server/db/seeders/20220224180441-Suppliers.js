'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Suppliers', [{
      name: 'Postavshik Ivanov',
      inn: 1234567890,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Postavshik Petrov',
      inn: 1234567890,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Suppliers', null, {});
  }
};
