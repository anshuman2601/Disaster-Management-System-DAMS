module.exports = (sequelize, DataTypes) => {
  const Request = sequelize.define("request", {
    request_id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    request_name: { type: DataTypes.STRING, allowNull: false },
    request_description: { type: DataTypes.STRING, allowNull: false },
    request_quantity: { type: DataTypes.INTEGER, allowNull: false },
    request_status: { type: DataTypes.STRING, allowNull: false },
    request_disaster_id: { type: DataTypes.INTEGER, allowNull: false },
  });

  return Request;
};
