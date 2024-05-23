const express = require('express');
const app = new express();
require('dotenv').config()
const fs = require('fs');
const router = require('./routes/data_routes');

app.use('/api', router);




app.listen(process.env.PORT,()=>{
    console.log(`Server is listening at ${process.env.PORT}`)
});
