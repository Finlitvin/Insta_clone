const NotFoundException = require('../errors/NotFoundExceptions');

module.exports = (req, res, next) => {
	next(new NotFoundException('Page Not Found'));
}