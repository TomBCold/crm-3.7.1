module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      roleId: 1,
      name: 'Сергей Петров',
      email: '123@123.com',
      password: '123',
      telephone: 89991122333,
      photo: '/img/JP_09994.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      roleId: 2,
      name: 'Владимр Иванов',
      email: '234@234.com',
      password: '234',
      telephone: 89991122333,
      photo: '/img/JP_00082.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
