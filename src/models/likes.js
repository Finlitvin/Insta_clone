const sequelize = require('../database/sequelize');
const Sequelize = require('sequelize');
// create table Likes
const Likes = sequelize.define('likes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    post_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

module.exports = Likes;
