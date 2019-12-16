const sequelize = require('../database/sequelize');
const Sequelize = require('sequelize');
// create table PostsTags
const PostsTags = sequelize.define('posts_tags', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    post_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tag_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}).sync();

module.exports = PostsTags;