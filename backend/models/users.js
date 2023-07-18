const { sequelize } = require("../db/mysql");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "users",
  {
    avatar: {
      type: DataTypes.STRING,
      require: true,
    },
    firstName: {
      type: DataTypes.STRING,
      require: true,
    },
    lastName: {
      type: DataTypes.STRING,
      require: true,
    },
    email: {
      type: DataTypes.STRING,
      require: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
    deletedAt: "deletedAt",
  }
);

exports.User = User;
