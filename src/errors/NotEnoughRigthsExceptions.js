module.exports = class NotEnoughRightsExceptions extends Error{
	constructor(message){
		super(message);
		this.name = 'NotEnoughRightsExceptions';
		this.status = 403;
	}
}