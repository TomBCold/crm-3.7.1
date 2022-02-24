'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Contracts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        }
      },
      clientId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Clients",
          key: "id",
        }
      },
      driverId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Drivers",
          key: "id",
        }
      },
      forwarderId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Forwarders",
          key: "id",
        }
      },
      statusApprove: {
        type: Sequelize.BOOLEAN
      },
      statusPaymentClient: {
        type: Sequelize.BOOLEAN
      },
      statusPaymentSupplier: {
        type: Sequelize.BOOLEAN
      },
      statusExport: {
        type: Sequelize.BOOLEAN
      },
      statusSignature: {
        type: Sequelize.BOOLEAN
      },
      statusPackage: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Contracts');
  }
};
