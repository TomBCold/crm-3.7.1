const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Contract, { foreignKey: 'clientId' });
      this.hasMany(models.ClientInvoice, { foreignKey: 'clientId' });
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }

  Client.init({
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    inn: DataTypes.BIGINT,
    telephone: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Client'
  });
  return Client;
};
