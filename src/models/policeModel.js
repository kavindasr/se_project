const { DataTypes} = require('sequelize');
const sequelize = require('../helpers/sequelizer');

const police = sequelize.define('police',{
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references: {
            model: 'user', 
            key: 'id',
        },
        primaryKey : true 
    },
    designation : {
        type : DataTypes.STRING(500),
        allowNull :false
    },
    station : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references: {
            model: 'station', 
            key: 'id',
        }
    },
},
{
  timestamps: false
}
);

police.belongsToOne(models.user, {
    through: {
      model: models.user,
      unique: true
    },
    foreignKey: "id"
})

police.belongsToOne(models.station, {
    through: {
      model: models.station,
      unique: true
    },
    foreignKey: "station"
})

// police.sync({force:true}) // DANGEROUS!!! must remove at production
module.exports = police;