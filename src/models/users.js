const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize');
const bcrypt = require('bcrypt');


const User = sequelize.define('users', {
    email: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


User.beforeCreate((user, opts) => {
    user.password = User.hashPassword(user.password);
});

User.hashPassword = password => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

User.prototype.validatePassword = function (password) {
    if (!password || !this.password) {
        return false;
    }
    return bcrypt.compareSync(password, this.password);
};

module.exports = User;