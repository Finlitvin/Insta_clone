const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize');


const Role = sequelize.define('roles', {
    value: {
        type:Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});


module.exports = Role;