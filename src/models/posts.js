// LOAD MODULE
const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize');

//------------------------------------------------


const Posts = sequelize.define('posts', {
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    pub_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT
    },
    photo_url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_update: {
        type: Sequelize.DATE
    }
});


module.exports = Posts;