const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelizer");
const police = require("./policeModel");

const station = sequelize.define(
  "station",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

station.belongsTo(police, {
  foreignKey: 'station',
  onDelete: 'CASCADE'
});
police.belongsTo(station);

station.sync({force:true}) // DANGEROUS!!! must remove at production
module.exports = station;
