module.exports = (sequelize, DataTypes) => {
  const Disasters = sequelize.define("disasters", {
    disaster_id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    disaster_name: { type: DataTypes.STRING, allowNull: false },
    disaster_type: { type: DataTypes.STRING, allowNull: false },
    disaster_date: { type: DataTypes.DATE, allowNull: false },
    disaster_description: { type: DataTypes.STRING, allowNull: false },
    disaster_location: { type: DataTypes.STRING, allowNull: false },
    disaster_status: { type: DataTypes.STRING, allowNull: false },
  });

  return Disasters;
}