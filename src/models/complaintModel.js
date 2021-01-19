const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelizer");

const complaint = sequelize.define(
  "complaint",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    nic: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.INTEGER,
    },
    address: {
      type: DataTypes.STRING,
    },
    complaint: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    file: {
      type: DataTypes.STRING,
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



complaint.sync({force:true}) // DANGEROUS!!! must remove at production
module.exports = complaint;
