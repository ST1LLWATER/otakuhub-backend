'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "User Must Have A Name" },
          notEmpty: { msg: "Name Cannot Be Empty" },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "User Must Have A Name" },
          notEmpty: { msg: "Name Cannot Be Empty" },
        },
      },
      username: {
        type: DataTypes.STRING,
        primaryKey: true,
        validate: {
          notNull: { msg: "User Must Have An Email" },
          notEmpty: { msg: "Email Cannot Be Empty" },
          isEmail: { msg: "Must Be A Valid Email" },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Password Required" },
          notEmpty: { msg: "Password Cannot Be Empty" },
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "user",
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('users');
  }
};