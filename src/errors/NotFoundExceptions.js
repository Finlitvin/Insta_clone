module.exports = class NotFoundExceptions extends Error{
	constructor(message){
		super(message);
		this.name = 'NotFoundExceptions';
		this.status = 404;
	}
}