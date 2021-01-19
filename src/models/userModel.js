const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelizer");
const police = require("./policeModel");
const lawyer = require("./lawyerModel");
const people = require("./peopleModel");


const user = sequelize.define(
  "user",
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
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING,
    },
    created_on: {
      type: DataTypes.DATE,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
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

user.hasMany(police, {
  foreignKey: 'id',
  onDelete: 'CASCADE'
});
police.belongsTo(user);

user.hasMany(lawyer, {
  foreignKey: 'id',
  onDelete: 'CASCADE'
});
lawyer.belongsTo(user);

user.hasMany(people, {
  foreignKey: 'id',
  onDelete: 'CASCADE'
});
people.belongsTo(user);

user.sync({force:true}) // DANGEROUS!!! must remove at production
module.exports = user;
