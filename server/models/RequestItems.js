module.exports = (sequelize, DataTypes) => {
    const RequestItem = sequelize.define("request_item", {
      request_id: { type: DataTypes.INTEGER, allowNull: false},
      item_id: { type: DataTypes.INTEGER, allowNull: false },
      quantity: {type: DataTypes.INTEGER, allowNull: false}
    });
  
    return RequestItem;
  };