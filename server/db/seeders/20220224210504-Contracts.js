module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Contracts', [{
      userId: 1,
      clientId: 1,
      driverId: 1,
      forwarderId: 1,
      statusApprove: false,
      statusPaymentClient: true,
      statusPaymentSupplier: false,
      statusExport: false,
      statusSignature: true,
      statusPackage: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 1,
      clientId: 2,
      driverId: 2,
      forwarderId: 2,
      statusApprove: true,
      statusPaymentClient: false,
      statusPaymentSupplier: false,
      statusExport: false,
      statusSignature: false,
      statusPackage: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 1,
      clientId: 1,
      driverId: 2,
      forwarderId: 1,
      statusApprove: true,
      statusPaymentClient: true,
      statusPaymentSupplier: true,
      statusExport: true,
      statusSignature: true,
      statusPackage: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 1,
      clientId: 1,
      driverId: 1,
      forwarderId: 1,
      statusApprove: false,
      statusPaymentClient: false,
      statusPaymentSupplier: false,
      statusExport: false,
      statusSignature: false,
      statusPackage: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 1,
      clientId: 2,
      driverId: 2,
      forwarderId: 1,
      statusApprove: true,
      statusPaymentClient: true,
      statusPaymentSupplier: false,
      statusExport: false,
      statusSignature: false,
      statusPackage: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    , {
      userId: 1,
      clientId: 3,
      driverId: 2,
      forwarderId: 1,
      statusApprove: true,
      statusPaymentClient: true,
      statusPaymentSupplier: false,
      statusExport: false,
      statusSignature: false,
      statusPackage: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Contracts', null, {});
  }
};
