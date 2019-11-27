const Users = require('./users');
const Posts = require('./posts');
const UsersRoles = require('./users_roles');
const Roles = require('./roles');
const Likes = require('./likes');
const Tags = require('./tags');
const PostsTags = require('./posts_tags');

// ------Hint-----
// belongsTo - one-to-one
// hasMany - many-to-one
// belongsToMany - one-to-many

// users - users_roles - roles
Users.belongsToMany(Roles, {through: UsersRoles, foreignKey: 'user_id', onDelete: 'SET NULL'});
Roles.belongsToMany(Users, {through: UsersRoles, foreignKey: 'role_id', onDelete: 'SET NULL'});

// posts - posts_tags - tags
Posts.belongsToMany(Tags, {through: PostsTags, foreignKey: 'post_id', onDelete: 'SET NULL'});
Tags.belongsToMany(Posts, {through: PostsTags, foreignKey: 'tag_id', onDelete: 'SET NULL'});

// users - likes
Users.hasMany(Likes, {foreignKey: 'user_id', onDelete: 'CASCADE'});
Likes.belongsTo(Users, {foreignKey: 'user_id', onDelete: 'CASCADE'});

// users - posts
Users.hasMany(Posts, {foreignKey: 'user_id', onDelete: 'CASCADE'});
Posts.belongsTo(Users, {foreignKey: 'user_id', onDelete: 'CASCADE'});

// posts - likes
Posts.hasMany(Likes, {foreignKey: 'post_id', onDelete: 'CASCADE'});
Likes.belongsTo(Posts, {foreignKey: 'post_id', onDelete: 'CASCADE'});