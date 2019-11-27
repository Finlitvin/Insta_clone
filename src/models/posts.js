const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize');

const Posts = sequelize.define('posts', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    pub_date: {
        type: Sequelize.DATE,
    },
    content: {
        type: Sequelize.TEXT
    },
    photo_url: {
        type: Sequelize.STRING
    },
    last_update: {
        type: Sequelize.DATE
    }
})

export default Posts;