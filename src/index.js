const express = require('express');
const app = express();

const postRouter = require('./routes/postRout');


const PORT = 3000;

app.use('/', postRouter);

app.listen(process.env.PORT || PORT, () => {
    console.log(`SERVER [ OK ]    PORT ${process.env.PORT || PORT}`);
});