const sequelize = require('../database/sequelize');
const Sequelize = require('sequelize');
// create table UsersRoles
const UsersRoles = sequelize.define('users_roles', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    role_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}).sync();

module.exports =  UsersRoles;