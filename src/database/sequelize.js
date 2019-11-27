const Sequelize = require('sequelize');
const config = require('../config/sequelize');

const sequelize = new Sequelize('instagram', 'root', 'root', config);

export default sequelize;