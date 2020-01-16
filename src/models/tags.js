// LOAD MODULE
const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize');

//------------------------------------------------


const Tags = sequelize.define('tags', {
    value: {
        type:Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});


module.exports = Tags;