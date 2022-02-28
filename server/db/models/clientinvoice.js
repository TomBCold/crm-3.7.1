const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ClientInvoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Client, { foreignKey: 'clientId' });
      this.belongsTo(models.Contract, { foreignKey: 'contractId' });
    }
  }

  ClientInvoice.init({
    clientId: DataTypes.INTEGER,
    contractId: DataTypes.INTEGER,
    url: DataTypes.STRING,
    sum: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ClientInvoice'
  });
  return ClientInvoice;
};
