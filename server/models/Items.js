module.exports = (sequelize, DataTypes) => {
  const Items = sequelize.define("items", {
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    item_name: { type: DataTypes.STRING, allowNull: false },
    item_description: { type: DataTypes.STRING, allowNull: false },
  });

  return Items;
};
