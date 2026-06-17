let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
require('dotenv').config();
let app = express()
app.use(cors());
app.use(express.json());



mongoose.connect(process.env.DBURL).then(()=>{
    console.log("connected to mongodb")
    app.listen(process.env.PORT,()=>{
        console.log("server is running on port "+process.env.PORT)
    })
})