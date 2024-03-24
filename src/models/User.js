const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // En Mayúsculas y singular      // en minúsculas y singular
const User = sequelize.define('user', {
    // Definimos las columnas aquí
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(100),
        allowNull:false
        // allowNull por defecto esta en true
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false

    },
    password:{
        type:DataTypes.STRING,
        allowNull:false

    },
    birthaday:{
        type:DataTypes.DATEONLY,
        allowNull:false
    }
});

module.exports = User;