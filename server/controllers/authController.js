const { userModel } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('../utils/jwt');

async function register(req, res) {
    const { username, email,number, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const pattern = new RegExp(`^${email}$`, 'i');
        const existing = await userModel.findOne({ email: { $regex: pattern } });
        if (existing) { throw new Error('Email is already taken') }
        const user = await userModel.create({ username,email,number, hashedPassword });
        const token = jwt.createToken({ username,email, id: user._id });
        res.cookie('auth-cookie', token, { httpOnly: true });
        res.send({ username: user.username, email: user.email, id: user._id, role: user.role})
    } catch (err) {
        res.send(err.message);
    }
}

async function login(req, res) {
    const { email, password } = req.body;

    try {
        const pattern = new RegExp(`^${email}$`, 'i');
        const user = await userModel.findOne({ email: { $regex: pattern } });
        if (!user) { throw new Error('User not found!') };
        const passwordMatch = await bcrypt.compare(password, user.hashedPassword);
        if (!passwordMatch) { throw new Error('Invalid password!') };
        const token = jwt.createToken({ username: user.username, email, id: user._id });
        res.cookie('auth-cookie', token, { httpOnly: false });
        res.send({ username: user.username, email: user.email, id: user._id, role: user.role });
    } catch (err) {
        res.send(err.message);
    }
}

async function logout(req,res){
    res.clearCookie('auth-cookie');
    res.send({"message": "Logged out"});
}

module.exports = {
    register,
    login,
    logout
}