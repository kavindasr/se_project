const { DataTypes} = require('sequelize');
const sequelize = require('../helpers/sequelizer');
const complaint = require('./complaintModel');

const user = sequelize.define('user',{
    id : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    nic : {
        type : DataTypes.STRING(100),
        allowNull : false,
        primaryKey : true 
    },
    first_name : {
        type : DataTypes.STRING(100),
        allowNull :false
    },
    last_name : {
        type : DataTypes.STRING(100)
    },
    email : {
        type : DataTypes.STRING(100)
    },
    password : {
        type : DataTypes.STRING(500),
        allowNull : false
    },
    mobile : {
        type : DataTypes.STRING(10)
    },
    created_on : {
        type : DataTypes.DATE
    },
    level : {
        type : DataTypes.INTEGER,
        allowNull :false
    },
    status : {
        type : DataTypes.INTEGER,
        allowNull :false
    }
},
{
  timestamps: false
}
);

// user.sync({force:true}) // DANGEROUS!!! must remove at production
module.exports = user;