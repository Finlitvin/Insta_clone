const Sequelize = require('sequelize');
const config = require('../config/sequelize');

const sequelize = new Sequelize('instagram', 'root', 'root', config);

// test connection to DB
sequelize.authenticate().then(() => {
    console.log('Connection established successfully: ', config.host);
}).catch(err => {
    console.error('Unable to connect to the database:', err);
}).finally(() => {
    sequelize.close();
});

module.exports = sequelize;