'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SupplierInvoices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      supplierId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Suppliers",
          key: "id",
        }
      },
      contractId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Contracts",
          key: "id",
        }
      },
      url: {
        type: Sequelize.STRING
      },
      sum: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('SupplierInvoices');
  }
};
