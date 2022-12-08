module.exports = (sequelize, DataTypes) => {
  const Requests = sequelize.define("requests", {
    request_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    request_username: { type: DataTypes.STRING, allowNull: false },
    request_disaster_id: { type: DataTypes.INTEGER, allowNull: false },
    request_date: { type: DataTypes.DATEONLY, allowNull: false },
    request_expiration: { type: DataTypes.DATEONLY, allowNull: false },
  });

  return Requests;
};
