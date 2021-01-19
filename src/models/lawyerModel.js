const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelizer");
const law = require("./lawModel");

const lawyer = sequelize.define(
  "lawyer",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

lawyer.hasMany(law, {
  foreignKey: "lawyer_id",
  onDelete: "CASCADE",
});
law.belongsTo(lawyer);

lawyer.sync({ force: true }); // DANGEROUS!!! must remove at production
module.exports = lawyer;
