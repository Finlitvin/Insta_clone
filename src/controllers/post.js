const postService = require('../services/post');
const CreationError = require('../errors/CreationError');
const UpdateError = require('../errors/UpdateError');
const DeleteError = require('../errors/DeleteError');
const Response = require('../helpers/response');


class PostController{

	async create(req, res, next){
		// const postData = req.body;
		const postData = {
			user_id: req.session.user.id,
			pub_date: req.body.pub_date,
			content: req.body.content,
			photo_url: req.body.photo_url,
		}
		// let userId = req.session.user.id;

		try{
			await postService.create(postData);
			res.json(new Response("Creation successful", 200));
		}catch(err){
			return next(new CreationError("Creation failed"));
		}
	}

	async update(req, res, next){
		const postId = req.params.id;
		const postData = req.body;

		try{
			let userId = req.session.user.id;
			
			await postService.update(userId, postId, postData);
			res.json(new Response("Update successful", 200));
		}catch(err){
			return next(new UpdateError("Failed update"));
		}
	}

	async delete(req, res, next){
		const postId = req.params.id;

		try{
			let userId = req.session.user.id;

			await postService.delete(userId, postId);
			res.json(new Response("Delete successful", 200));
		}catch(err){
			return next(new DeleteError("Delete failed"));
		}
	}

	async setLike(req, res, next){
		try{
			let userId = req.session.user.id;
			let postId = req.params.id;

			await postService.setLike(userId, postId);
			res.json(new Response("Like set", 200));
		}catch(err){
			return next(new UpdateError("Failed to set like"));
		}
	}

	async deleteLike(req, res, next){
		try{
			let userId = req.session.user.id;
			let postId = req.params.id;

			await postService.deleteLike(userId, postId);
			res.json(new Response("Like delete", 200));
		}catch(err){
			return next(new DeleteError("Failed to delete like"));
		}
	}
}


module.exports = new PostController();