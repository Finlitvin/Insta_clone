const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize');


const Like = sequelize.define('likes', {
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    post_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});



module.exports = Like;