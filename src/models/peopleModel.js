const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelizer");
const complaint = require("./complaintModel");
const harassment = require("./harassmentModel");

const people = sequelize.define(
  "people",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    address: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
  }
);


people.hasMany(complaint, {
  foreignKey: 'people',
  onDelete: 'CASCADE'
});
complaint.belongsTo(people);

people.hasMany(harassment, {
  foreignKey: 'people',
  onDelete: 'CASCADE'
});
harassment.belongsTo(people);

people.sync({force:true}) // DANGEROUS!!! must remove at production
module.exports = people;
