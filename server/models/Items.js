module.exports = (sequelize, DataTypes) => {
  const Items = sequelize.define("items", {
    item_id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    item_name: { type: DataTypes.STRING, allowNull: false },
    item_description: { type: DataTypes.STRING, allowNull: false },
    item_quantity: { type: DataTypes.INTEGER, allowNull: false },
    item_status: { type: DataTypes.STRING, allowNull: false },
    item_disaster_id: { type: DataTypes.INTEGER, allowNull: false },
  });

  return Items;
}