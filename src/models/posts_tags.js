// LOAD MODULE
const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize');

//------------------------------------------------


const PostsTags = sequelize.define('posts_tags', {
    post_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tag_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});


module.exports = PostsTags;