const Users = require('../models/users');
const Posts = require('../models/posts');
const UsersRoles = require('../models/users_roles');
const Roles = require('../models/roles');
const Likes = require('../models/likes');
const Tags = require('../models/tags');
const PostsTags = require('../models/posts_tags');


const db = {
    Users: Users,
    Posts: Posts,
    UsersRoles: UsersRoles,
    Roles: Roles,
    Likes: Likes,
    Tags: Tags,
    PostsTags: PostsTags
};


module.exports = db;