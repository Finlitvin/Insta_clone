CREATE TABLE users (
	id INT,
	email VARCHAR(255),
	password VARCHAR(255),
	first_name VARCHAR(255),
	last_name VARCHAR(255),
	PRIMARY KEY(id)
);

CREATE TABLE users_roles (
	id INT,
	user_id INT,
	role_id INT,
	PRIMARY KEY(id)
);

CREATE TABLE roles (
	id INT,
	name VARCHAR(255),
	PRIMARY KEY(id)	
);

CREATE TABLE posts (
	id INT,
	user_id INT,
	date DATE,
	content TEXT,
	photo_url VARCHAR(255),
	last_update DATE,
	tag_id INT,
	PRIMARY KEY(id)
);

CREATE TABLE likes (
	id INT,
	user_id INT,
	post_id INT,
	PRIMARY KEY(id)
);

CREATE TABLE posts_tags (
	id INT,
	post_id INT,
	tag_id INT,
	PRIMARY KEY(id)
);

CREATE TABLE tags(
	id INT,
	name VARCHAR(255),
	PRIMARY KEY(id)
);

ALTER TABLE users_roles ADD CONSTRAINT fk_user_role_user FOREIGN KEY(user_id) REFERENCES users(id);

ALTER TABLE users_roles ADD CONSTRAINT fk_user_role_role FOREIGN KEY(role_id) REFERENCES roles(id);

ALTER TABLE posts ADD CONSTRAINT fk_post_user FOREIGN KEY(user_id) REFERENCES users(id);

ALTER TABLE likes ADD CONSTRAINT fk_like_user FOREIGN KEY(user_id) REFERENCES users(id);

ALTER TABLE likes ADD CONSTRAINT fk_like_post FOREIGN KEY(post_id) REFERENCES posts(id);

ALTER TABLE posts_tags ADD CONSTRAINT fk_post_tag_post FOREIGN KEY(post_id) REFERENCES posts(id);

ALTER TABLE posts_tags ADD CONSTRAINT fk_post_tag_tag FOREIGN KEY(tag_id) REFERENCES tags(id);