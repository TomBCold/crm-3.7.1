const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Client, { foreignKey: 'userId' });
      this.hasMany(models.Contract, { foreignKey: 'userId' });
      this.hasMany(models.Comment, { foreignKey: 'userId' });
      this.belongsTo(models.Role, { foreignKey: 'roleId' });
    }
  }

  User.init({
    roleId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    telephone: DataTypes.BIGINT,
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User'
  });
  return User;
};
