'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('CarTypes', [{
      title: 'Fura',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Gazel',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CarTypes', null, {});
  }
};
