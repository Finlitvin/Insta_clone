const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize');


const PostTag = sequelize.define('posts_tags', {
    post_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tag_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});


module.exports = PostTag;