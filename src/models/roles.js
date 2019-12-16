const sequelize = require('../database/sequelize');
const Sequelize = require('sequelize');
// create table Roles
const Roles = sequelize.define('roles', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    value: {
        type:Sequelize.STRING,
        allowNull: false,
        unique: true
    }
}).sync();

module.exports = Roles;