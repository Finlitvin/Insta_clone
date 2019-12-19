const Sequelize = require('sequelize');
const config = require('../config/sequelize');

const sequelize = new Sequelize('instagram', 'root', 'root', config);

// test connection to DB
sequelize.authenticate().then(() => {
    sequelize.sync();
    console.log('DATABASE [ OK ]    HOST: ', config.host);
}).catch(err => {
    console.error('DATABASE ', err);
});

module.exports = sequelize;