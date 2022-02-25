'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Forwarders', [{
      name: 'Expeditor Vasechkin',
      telephone: 89991122333,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Expeditor Klichko',
      telephone: 89991122333,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Forwarders', null, {});
  }
};
