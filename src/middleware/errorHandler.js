const HTTPstatus = require('http-status-codes');
const Response = require('../helpers/resMessage');


module.exports = (error, req, res, next) => {
	error.status = error.status || HTTPstatus.INTERNAL_SERVER_ERROR;
	return res.status(error.status).json(resMessage.ERROR(error));
	//res.json(new Response(error.message, error.status || 500));
};