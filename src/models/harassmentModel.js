const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelizer");

const harassment = sequelize.define(
  "harassment",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_on: {
      type: DataTypes.DATE,
    },
    people: {
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);


harassment.sync({force:true}) // DANGEROUS!!! must remove at production
module.exports = harassment;
