const userCtrl = {};

const User = require('../models/User');

userCtrl.getUsers = async(req, res) => {
    const users = await User.find();
    res.json(users);
}

userCtrl.createUser = async(req, res) => {
    const { username } = req.body;
    const newUser = new User({
        username
    })
    await newUser.save();
    res.json({ message: 'User created' });
}

userCtrl.deleteUser = async(req, res) => {
    await User.findOneAndDelete({ _id: req.params.id });
    res.json({ message: 'User deleted' });
}

module.exports = userCtrl;