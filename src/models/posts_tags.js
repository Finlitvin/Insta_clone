const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize');

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
})

export default PostsTags;