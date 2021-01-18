const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelizer");

const lawyer = sequelize.define(
  "lawyer",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
      primaryKey: true,
    },
    designation: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

lawyer.belongsToOne(models.user, {
  through: {
    model: models.user,
    unique: true,
  },
  foreignKey: "id",
});

// lawyer.sync({force:true}) // DANGEROUS!!! must remove at production
module.exports = lawyer;
