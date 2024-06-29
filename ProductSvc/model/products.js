const { Model, DataTypes } = require('sequelize');
const sequelize = require("../db/config");

class Products extends Model { };

Products.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ProductName: {
        type: DataTypes.STRING
    },
    ProductQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    sequelize,
    timestamps: false,
    modelName: 'Products',
});

module.exports = Products