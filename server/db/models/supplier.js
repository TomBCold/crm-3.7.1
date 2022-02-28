const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Supplier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Upd, { foreignKey: 'supplierId' });
      this.hasMany(models.SupplierInvoice, { foreignKey: 'supplierId' });
    }
  }

  Supplier.init({
    name: DataTypes.STRING,
    inn: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Supplier'
  });
  return Supplier;
};
