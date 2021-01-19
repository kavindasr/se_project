const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelizer");

const law = sequelize.define(
  "law",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    law: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lawyer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

law.sync({ force: true }); // DANGEROUS!!! must remove at production
module.exports = law;
