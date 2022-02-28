const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CarType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Driver, { foreignKey: 'carTypeId' });
    }
  }

  CarType.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CarType'
  });
  return CarType;
};
