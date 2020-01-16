module.exports = class EmptyResExeption extends Error {
	constructor(message) {
		super(message);
		this.name = 'EmptyResExeption';
		this.status = 400;
	}
}