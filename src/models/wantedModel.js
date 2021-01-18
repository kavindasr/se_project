const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelizer");

const wanted = sequelize.define(
  "wanted",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(500),
    },
    image: {
      type: DataTypes.STRING(500),
    },
    police: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "police",
        key: "id",
      },
    },
    status: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

wanted.belongsToMany(models.police, {
  through: {
    model: models.police,
    unique: false,
  },
  foreignKey: "police",
});

// wanted.sync({force:true}) // DANGEROUS!!! must remove at production
module.exports = wanted;
