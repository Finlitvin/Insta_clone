const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize');

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
})

export default Roles;