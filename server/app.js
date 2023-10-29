require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const colors = require('colors');
const connection = require('./db');
const app = express();
const router = require('./routes/user-routes');
const cors = require('cors');
const doctorrouter = require('./routes/doctor-routes');

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use("/api", doctorrouter);




//data base calling
connection();




// app.use('/', (req, res) => {
//     res.send("this is start");
// })

const port = process.env.PORT;
app.listen(port, (req, res) => {
    console.log(colors.bgMagenta(`Server Running On ${port}....`));
})