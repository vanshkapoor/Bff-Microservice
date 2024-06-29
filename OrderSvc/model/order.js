const { Model, DataTypes } = require('sequelize');
const sequelize = require("../db/config");

class Orders extends Model { };

Orders.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ProductId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    UserId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    Cost: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
}, {
    sequelize,
    timestamps: true,
    modelName: 'Orders',
});

module.exports = Orders