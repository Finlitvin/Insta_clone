const express = require('express');
const loader = require('./loader');
const DataBase = require('./database');
const app = express();

require('dotenv').config();


PORT = process.env.PORT;

app.use(loader);

DataBase.connect();

app.listen(PORT, () => {
	console.log(`SERVER [+]: PORT ${PORT}`);
});


module.exports = app;