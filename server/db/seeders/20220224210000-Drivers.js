'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Drivers', [{
      carTypeId: 1,
      name: 'Андрей Сигачев',
      telephone: 89991122333,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      carTypeId: 2,
      name: 'Роман Кауц',
      telephone: 89991122333,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    , {
      carTypeId: 2,
      name: 'Алексей Бредоусов',
      telephone: 899913333,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Drivers', null, {});
  }
};
