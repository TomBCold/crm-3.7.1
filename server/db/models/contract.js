const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Contract extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.ClientInvoice, { foreignKey: 'contractId' });
      this.hasMany(models.SupplierInvoice, { foreignKey: 'contractId' });
      this.hasMany(models.Comment, { foreignKey: 'contractId' });
      this.hasMany(models.Upd, { foreignKey: 'contractId' });
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.belongsTo(models.Client, { foreignKey: 'clientId' });
      this.belongsTo(models.Driver, { foreignKey: 'driverId' });
      this.belongsTo(models.Forwarder, { foreignKey: 'forwarderId' });
    }
  }

  Contract.init({
    userId: DataTypes.INTEGER,
    clientId: DataTypes.INTEGER,
    driverId: DataTypes.INTEGER,
    forwarderId: DataTypes.INTEGER,
    statusApprove: DataTypes.BOOLEAN,
    statusPaymentClient: DataTypes.BOOLEAN,
    statusPaymentSupplier: DataTypes.BOOLEAN,
    statusExport: DataTypes.BOOLEAN,
    statusSignature: DataTypes.BOOLEAN,
    statusPackage: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Contract'
  });
  return Contract;
};
