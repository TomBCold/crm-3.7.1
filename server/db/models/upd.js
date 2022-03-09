const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Upd extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Contract, { foreignKey: 'contractId' });
      this.belongsTo(models.Supplier, { foreignKey: 'supplierId' });
    }
  }

  Upd.init({
    contractId: DataTypes.INTEGER,
    supplierId: DataTypes.INTEGER,
    url: DataTypes.STRING,
    sum: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Upd'
  });
  return Upd;
};
