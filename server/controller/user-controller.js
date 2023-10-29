const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = 'My-key';



const signup = async (req, res, next) => {
    
    const { firstName, lastName, add, age, phone, email, password } = req.body;
    let existingUser;
try {
    existingUser = await User.findOne({ email: email });
} catch (error) {
    console.log(error)
    }
    if (existingUser) {
        return res.status(400).json({ message: "User already exist" });
    }  
    //hash pass word
    const hashedPassword = bcrypt.hashSync(password);


    //create validation
    const user = new User({
        firstName,
        lastName,
        email,
        add,
        age,
        phone,
        password:hashedPassword,
    });
    try {
        await user.save();
    } catch (e) {
        console.log(e);
    }
    return res.status(201).json({message:user})
}

//log in


const login = async (req, res, next) => {
    const { email, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (error) {
        return new Error(error);
    }
    if (!existingUser) {
        return res.status(400).json({ message: "User not found...Please sig Up" });
    }
    //decocde hash password
    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Invalid Email or PassWord" });
    }
    //jwt use
    const token = jwt.sign({ id: existingUser._id }, JWT_SECRET_KEY, { expiresIn: "30d" });
    return res.status(200).json({ message: "Successfully Login",user:existingUser,token });
}
const verifyToken = (req, res, next) => {
    const headers = req.headers[`authorization`];
    const token = headers.split(" ")[1];
    if (!token) {
       return res.status(404).json({message:"no token found"})
    }
    jwt.verify(String(token), JWT_SECRET_KEY, (err, user) => {
        if (err) {
           return res.status(400).json({message:"Inavalid Token"})
        }
        console.log(user.id);
        req.id = user.id;
    })
}

const getUser = async (req, res, next) => {
    const userId = req.id;
    let user;
    try {
        user = await User.findById(userId, "-password");
    } catch (error) {
        return new Error(error)
    }
    if (!user) {
        return res.status(404).json({ message: "user not found" });

    }
    return res.status(200).json({ user });
}
exports.signup = signup;
exports.login = login;

exports.verifyToken = verifyToken;
exports.getUser = getUser;