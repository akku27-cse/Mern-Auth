// const express = require('express');
// const mongoose = require('mongoose');
const colors = require('colors');
require("dotenv").config();
 

// mongoose.connect(process.env.DB, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }.then((result) => {
//     console.log("connected")
// }).catch((err) => {
//     console.log("error")
// })
// );


const mongoose = require("mongoose");
module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(process.env.DB, connectionParams);
    console.log(colors.bgYellow("Connect With Data-base.."));
  } catch (error) {
    console.log(error);
  }
};