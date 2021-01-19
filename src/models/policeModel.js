const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelizer");
const suspect = require("./suspectModel");
const wanted = require("./wantedModel");

const police = sequelize.define(
  "police",
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
    station: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

police.hasMany(suspect, {
  foreignKey: 'police',
  onDelete: 'CASCADE'
});
suspect.belongsTo(police);

police.hasMany(wanted, {
  foreignKey: 'police',
  onDelete: 'CASCADE'
});
wanted.belongsTo(police);



police.sync({force:true}) // DANGEROUS!!! must remove at production
module.exports = police;
