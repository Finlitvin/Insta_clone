const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize');

const Tags = sequelize.define('tags', {
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

export default Tags;