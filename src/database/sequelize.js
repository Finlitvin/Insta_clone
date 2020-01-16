// LOAD MODULE
const Sequelize = require('sequelize');

const config = require('../config/sequelize');

const dbInfo = require('../config/default');

const sequelize = new Sequelize(dbInfo.DB_NAME, dbInfo.DB_USERNAME, dbInfo.DB_PASSWORD, config);

//--------------------------------------------


// CONNECT TO DB
sequelize.authenticate().then(() => {
	sequelize.sync();
	console.log(`DATABASE [ OK ]	HOST: ${config.host}`);
}).catch(err => {
	console.error('DATABASE [ - ]	', err);
});


module.exports = sequelize;

