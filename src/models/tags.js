const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize');


const Tag = sequelize.define('tags', {
    value: {
        type:Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});


module.exports = Tag;