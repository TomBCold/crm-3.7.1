'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Forwarders', [{
      name: 'Петр Иванович',
      telephone: 89991122333,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Александр Катренко',
      telephone: 89991122333,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Сергей Петров',
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
