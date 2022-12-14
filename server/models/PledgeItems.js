module.exports = (sequelize, DataTypes) => {
    const PledgeItem = sequelize.define("pledge_item", {
      pledget_id: { type: DataTypes.INTEGER, allowNull: false},
      item_id: { type: DataTypes.INTEGER, allowNull: false },
      quantity: {type: DataTypes.INTEGER, allowNull: false}
    });
  
    return PledgeItem;
  };