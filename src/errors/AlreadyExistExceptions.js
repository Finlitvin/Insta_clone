module.exports = class AlreadyExistExceptions extends Error{
	constructor(message){
		super(message);
		this.name = 'AlreadyExistExceptions';
		this.status = 400;
	}
}