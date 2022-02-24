'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ClientInvoices', [{
      clientId: 1,
      contractId: 1,
      url: 'url/url.com',
      sum: 1800000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      clientId: 2,
      contractId: 2,
      url: 'url/url.com',
      sum: 880000,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ClientInvoices', null, {});
  }
};
