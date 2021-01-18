const { DataTypes} = require('sequelize');
const sequelize = require('../helpers/sequelizer');

const harassment = sequelize.define('harassment',{
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        primaryKey : true 
    },
    description : {
        type : DataTypes.STRING(500),
        allowNull : false
    },
    created_on : {
        type : DataTypes.DATE
    },
    people : {
        type : DataTypes.INTEGER,
        references: {
            model: 'people', 
            key: 'id',
        }
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

harassment.belongsToOne(models.people, {
    through: {
      model: models.people,
      unique: true
    },
    foreignKey: "people"
})


// harassment.sync({force:true}) // DANGEROUS!!! must remove at production
module.exports = harassment;