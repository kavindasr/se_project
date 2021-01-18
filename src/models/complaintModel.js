const { DataTypes} = require('sequelize');
const sequelize = require('../helpers/sequelizer');

const complaint = sequelize.define('complaint',{
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        primaryKey : true 
    },
    nic : {
        type : DataTypes.STRING(100),
        allowNull : false
    },
    full_name : {
        type : DataTypes.STRING(200),
        allowNull :false
    },
    mobile : {
        type : DataTypes.INTEGER
    },
    address : {
        type : DataTypes.STRING(500)
    },
    complaint : {
        type : DataTypes.STRING(500),
        allowNull : false
    },
    file : {
        type : DataTypes.STRING(500)
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

complaint.belongsToOne(models.people, {
    through: {
      model: models.people,
      unique: true
    },
    foreignKey: "people"
})

// complaint.sync({force:true}) // DANGEROUS!!! must remove at production
module.exports = complaint;