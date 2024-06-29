'use strict';

const { DataTypes } = require('sequelize');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Orders', {
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
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0
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
      createdAt: {
        type: Sequelize.DataTypes.DATE
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Orders');
  }
};
