// const router = require('express').Router();
const express = require("express");
const { signup, login, verifyToken, getUser } = require("../controller/user-controller");
const router = express.Router();



// router.get('/', (req, res) => {
//     res.send("hello");
// })

router.post('/signup', signup);
router.post('/login', login);

router.get('/user',verifyToken,getUser)

module.exports = router;