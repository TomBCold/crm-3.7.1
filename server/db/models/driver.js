const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Driver extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.CarType, { foreignKey: 'carTypeId' });
      this.hasMany(models.Contract, { foreignKey: 'driverId' });
    }
  }

  Driver.init({
    carTypeId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    telephone: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Driver'
  });
  return Driver;
};
