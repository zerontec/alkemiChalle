const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
sequelize.define('saldo',{

    // id:{
    //     type:DataTypes.INTEGER,
    //     allowNull:false,
    //     primaryKey:true,
    //     autoIncrement:true
        
        
    //     },

        monto:{
            type:DataTypes.INTEGER,
            allowNull:false,
            defaultValue:0

        }
        
        


})






}