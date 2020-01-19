// ------Hint-----
// belongsTo - one-to-one
// hasMany - many-to-one
// belongsToMany - many-to-many
//-----------------------------

const Users = require('./users');
const Roles = require('./roles');
const UsersRoles = require('./usersRoles');
const Posts = require('./posts');
const Tags = require('./tags');
const PostsTags = require('./postsTags');
const Likes = require('./likes');


// users - users_roles - roles
Users.belongsToMany(Roles, {
    through: UsersRoles,
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
Roles.belongsToMany(Users, {
    through: UsersRoles,
    foreignKey: 'role_id',
    onDelete: 'CASCADE'
});

// posts - posts_tags - tags
Posts.belongsToMany(Tags, {
    through: PostsTags,
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});
Tags.belongsToMany(Posts, {
    through: PostsTags,
    foreignKey: 'tag_id',
    onDelete: 'CASCADE'
});

// users - likes
Users.hasMany(Likes, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
Likes.belongsTo(Users, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// users - posts
Users.hasMany(Posts, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
Posts.belongsTo(Users, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// posts - likes
Posts.hasMany(Likes, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});
Likes.belongsTo(Posts, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});