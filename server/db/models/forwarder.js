const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Forwarder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Contract, { foreignKey: 'forwarderId' });
    }
  }

  Forwarder.init({
    name: DataTypes.STRING,
    telephone: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Forwarder'
  });
  return Forwarder;
};
