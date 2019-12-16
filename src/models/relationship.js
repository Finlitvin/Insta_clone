DB = require('../init/initDataBase.js');
const Sequelize = require('sequelize');
// ------Hint-----
// belongsTo - one-to-one
// hasMany - many-to-one
// belongsToMany - many-to-many

    // users - users_roles - roles
    DB.Users.belongsToMany(DB.Roles, {through: DB.UsersRoles, foreignKey: 'user_id', onDelete: 'SET NULL'});
    DB.Roles.belongsToMany(DB.Users, {through: DB.UsersRoles, foreignKey: 'role_id', onDelete: 'SET NULL'});

    // posts - posts_tags - tags
    DB.Posts.belongsToMany(DB.Tags, {through: DB.PostsTags, foreignKey: 'post_id', onDelete: 'SET NULL'});
    DB.Tags.belongsToMany(DB.Posts, {through: DB.PostsTags, foreignKey: 'tag_id', onDelete: 'SET NULL'});

    // users - likes
    DB.Users.hasMany(DB.Likes, {foreignKey: 'user_id', onDelete: 'CASCADE'});
    DB.Likes.belongsTo(DB.Users, {foreignKey: 'user_id', onDelete: 'CASCADE'});

    // users - posts
    DB.Users.hasMany(DB.Posts, {foreignKey: 'user_id', onDelete: 'CASCADE'});
    DB.Posts.belongsTo(DB.Users, {foreignKey: 'user_id', onDelete: 'CASCADE'});

    // posts - likes
    DB.Posts.hasMany(DB.Likes, {foreignKey: 'post_id', onDelete: 'CASCADE'});
    DB.Likes.belongsTo(DB.Posts, {foreignKey: 'post_id', onDelete: 'CASCADE'});