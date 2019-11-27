const Sequelize = require('sequelize');
const config = require('../config/sequelize');

const sequelize = new Sequelize('instagram', 'root', 'root', config);

sequelize.authenticate().then(() => {
    console.log('Connection established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
}).finally(() => {
    sequelize.close();
});

export default sequelize;