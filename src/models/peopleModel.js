const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelizer");
const complaint = require("./complaintModel");

const user = require("./userModel");

const people = sequelize.define(
  "people",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      references: {
        model: "user",
        key: "id",
      },
    },
    address: {
      type: DataTypes.STRING(500),
    },
  },
  {
    timestamps: false,
  }
);

people.belongsToOne(models.user, {
  through: {
    model: models.user,
    unique: true,
  },
  foreignKey: "id",
});

// people.sync({force:true}) // DANGEROUS!!! must remove at production
module.exports = people;
