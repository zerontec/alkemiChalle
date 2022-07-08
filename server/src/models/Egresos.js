const {DataTypes} = require('sequelize');

module.exports = (sequelize)=> {
sequelize.define('egresos',{

    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
        
        
        },

        amount:{
            type:DataTypes.INTEGER,
            allowNull:false,

        },
        description:{
            type:DataTypes.STRING,
            allowNull:false


        }
        






})


}