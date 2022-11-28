module.exports = (sequelize, DataTypes) => {
  const Response = sequelize.define("response", {
    response_id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    response_item: { type: DataTypes.STRING, allowNull: false },
    response_item_quantity: { type: DataTypes.INTEGER, allowNull: false },
    response_description: { type: DataTypes.STRING, allowNull: false },
    response_request_id: { type: DataTypes.INTEGER, allowNull: false },
    response_item_id: { type: DataTypes.INTEGER, allowNull: false },
    response_status: { type: DataTypes.STRING, allowNull: false },
  });

  return Response;
};
