'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Upds', [{
      contractId: 1,
      supplierId: 1,
      url: 'url/url.com',
      sum: 1300000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      contractId: 2,
      supplierId: 2,
      url: 'url/url.com',
      sum: 780000,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Upds', null, {});
  }
};
