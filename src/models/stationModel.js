const { DataTypes} = require('sequelize');
const sequelize = require('../helpers/sequelizer');

const station = sequelize.define('station',{
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        primaryKey : true
    },
    name : {
        type : DataTypes.STRING(100),
        allowNull : false
    },
    address : {
        type : DataTypes.STRING(500),
        allowNull :false
    }
},
{
  timestamps: false
}
);

// station.sync({force:true}) // DANGEROUS!!! must remove at production
module.exports = station;