const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize');

const Likes = sequelize.define('likes', {
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
    post_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
})

export default Likes;
