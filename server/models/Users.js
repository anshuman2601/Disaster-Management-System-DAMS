module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("users", {
      username: {type: DataTypes.STRING, allowNull: false},
        password: {type: DataTypes.STRING, allowNull: false},
        email: {type: DataTypes.STRING, allowNull: false},
        first_name: {type: DataTypes.STRING, allowNull: false},
        last_name: {type: DataTypes.STRING, allowNull: false},
        role: {type: DataTypes.STRING, allowNull: false},
        status: {type: DataTypes.STRING, allowNull: false}
    });
  
    return Users;
  };