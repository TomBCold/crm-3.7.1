'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SupplierInvoices', [{
      supplierId: 1,
      contractId: 1,
      url: 'url/url.com',
      sum: 1300000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      supplierId: 2,
      contractId: 2,
      url: 'url/url.com',
      sum: 780000,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SupplierInvoices', null, {});
  }
};
