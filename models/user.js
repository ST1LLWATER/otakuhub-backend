"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Post }) {
      // define association here
      // this.hasMany(Post, { foreignKey: "userEmail" });
    }

    toJSON() {
      return {
        ...this.get(),
        password: undefined,
        createdAt: undefined,
        updatedAt: undefined,
      };
    }
  }
  User.init(
      {
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
          allowNull: false,
          validate: {
            notNull: { msg: "User Must Have An Email" },
            notEmpty: { msg: "Email Cannot Be Empty" },
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
      },
      {
        sequelize,
        tableName: "users",
        modelName: "User",
      }
  );
  return User;
};
