module.exports = (sequelize, DataTypes) => {
    const RequestItems = sequelize.define("RequestItems", {
      request_id: { type: DataTypes.INTEGER, allowNull: false},
      item_id: { type: DataTypes.INTEGER, allowNull: false },
      quantity: {type: DataTypes.INTEGER, allowNull: false}
    });
  
    return RequestItems;
  };