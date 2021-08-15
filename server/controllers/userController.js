const { userModel } = require('../models');
const bcrypt = require('bcrypt');


async function getUser(req,res){
    const id = req.params.id;
    const user = await userModel.findById(id)
    .populate('savedCars')
    .populate('rentedCars');

    res.send({
        email: user.email,
        username: user.username,
        number: user.number,
        id: user._id,
        role: user.role,
        savedCars: user.savedCars,
        rentedCars: user.rentedCars
    });
}

async function changePassword(req,res){
    const { oldPassword, password} = req.body;
    const id = req.params.id;

    const user = await userModel.findById(id);

    try {
        const passwordMatch = await bcrypt.compare(oldPassword, user.hashedPassword);
        if(!passwordMatch) { throw new Error('Wrong password!'); }

        const newPassword = await bcrypt.hash(password, 10);
        user.hashedPassword = newPassword;
        await user.save();

        res.end();
    }catch(err){
        res.send(err.message);
    }
}

module.exports = {
    getUser,
    changePassword
}