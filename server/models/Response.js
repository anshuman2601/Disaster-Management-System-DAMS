module.exports = (sequelize, DataTypes) => {
  const Response = sequelize.define("response", {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    disaster_id: { type: DataTypes.INTEGER, allowNull: false },
    user_id: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false },
  });

  return Response;
}