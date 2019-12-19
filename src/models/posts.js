const sequelize = require('../database/sequelize');
const Sequelize = require('sequelize');
// create table Posts
const Posts = sequelize.define('posts', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    pub_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
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