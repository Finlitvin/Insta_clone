const sequelize = require('../database/sequelize');
const Sequelize = require('sequelize');
// create table Tags
const Tags = sequelize.define('tags', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    value: {
        type:Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports =  Tags;