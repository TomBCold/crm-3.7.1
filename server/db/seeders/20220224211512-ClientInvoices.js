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
      sum: 280000,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    , {
      clientId: 1,
      contractId: 3,
      url: 'url/url.com',
      sum: 840000,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    , {
      clientId: 1,
      contractId: 4,
      url: 'url/url.com',
      sum: 38000,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    , {
      clientId: 1,
      contractId: 5,
      url: 'url/url.com',
      sum: 180000,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    , {
      clientId: 1,
      contractId: 6,
      url: 'url/url.com',
      sum: 770000,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ClientInvoices', null, {});
  }
};
