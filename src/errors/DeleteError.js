class DeleteError extends Error{
	constructor(message){
		super(message);
		this.name = "DeleteError";
		this.status = 400;
	}
}


module.exports = DeleteError;