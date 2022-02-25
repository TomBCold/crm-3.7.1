'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      roleId: 1,
      name: 'Manager Ivanov',
      email: '123@123.com',
      password: '123',
      telephone: 89991122333,
      photo: 'url/url.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      roleId: 2,
      name: 'Director Petrov',
      email: '234@234.com',
      password: '234',
      telephone: 89991122333,
      photo: 'url/url.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
