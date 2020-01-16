// LOAD MODULE
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const config = require('./config/default');

const postRoute = require('./routes/postRoute');

//-----------------------------------------


const PORT = config.PORT;

app.use(bodyParser());


app.use('/post', postRoute);

// LISTEN PORT
app.listen(process.env.PORT || PORT, () => {
	console.log(`SERVER [ OK ]	PORT ${process.env.PORT || PORT}`);
});
