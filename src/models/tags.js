const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize');

const Tag = sequelize.define('tag', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    value: {
        type:Sequelize.STRING,
        allowNull: false,
        unique: true
    }
})

export default Tag;