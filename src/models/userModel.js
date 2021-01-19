const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelizer");
const bcrypt = require('bcrypt');

const user = sequelize.define(
  "users",
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

user.findAndValidate = async function (email, password) {
  const foundUser = await this.findAll({where: {email:email }});
  const isValid = await bcrypt.compare(password, foundUser.password);
  return isValid ? foundUser : false;
}


//user.sync({force:true}) // DANGEROUS!!! must remove at production
module.exports = user;
