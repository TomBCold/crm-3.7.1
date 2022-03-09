'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clients', [{
      userId: 1,
      name: 'Стальинтекс',
      type: 'IP',
      inn: 1234567890,
      telephone: 89991122333,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 1,
      name: 'Демир-Москва',
      type: 'OAO',
      inn: 1234567890,
      telephone: 89991122333,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      name: 'Металлсервис',
      type: 'OAO',
      inn: 1234567890,
      telephone: 89991122333,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      name: 'СтеллаСтрой',
      type: 'OAO',
      inn: 1234567890,
      telephone: 89991122333,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clients', null, {});
  }
};
