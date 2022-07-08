const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
sequelize.define('ingresos',{

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


        },
        saldo:{

type:DataTypes.INTEGER,
defaultValue:0


        }

        


})






}