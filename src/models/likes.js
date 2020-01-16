// LOAD MODULE
const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize');

//------------------------------------------------


const Likes = sequelize.define('likes', {
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    post_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});


module.exports = Likes;