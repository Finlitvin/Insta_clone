const express = require('express');
const app = express();

const postRouter = require('./routes/postRout');
const roleRouter = require('./routes/roleRout');
const tagRouter = require('./routes/tagRout');

const bp = require('body-parser');


const PORT = 3000;

app.use(bp());

app.use('/post', postRouter);
app.use('/role', roleRouter);
app.use('/tag', tagRouter);

app.listen(process.env.PORT || PORT, () => {
    console.log(`SERVER [ OK ]    PORT ${process.env.PORT || PORT}`);
});