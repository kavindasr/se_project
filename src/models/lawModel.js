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
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    law: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    lawyer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "lawyer",
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  }
);

law.belongsToOne(models.lawyer, {
  through: {
    model: models.lawyer,
    unique: true,
  },
  foreignKey: "lawyer",
});

// law.sync({force:true}) // DANGEROUS!!! must remove at production
module.exports = law;
