const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize');

const Like = sequelize.define('like', {
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

export default Like;
