const express = require('express');
const app = express();

const PORT = 3000;


app.listen(process.env.PORT || PORT, () => {
    console.log(`[ OK ] server start on port: ${process.env.PORT || PORT}`);
});