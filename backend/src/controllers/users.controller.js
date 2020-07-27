const userCtrl = {};

userCtrl.getUsers = (req, res) => res.json({ message: [] });

userCtrl.createUser = (req, res) => res.json({ message: 'User created' });

userCtrl.deleteUser = (req, res) => res.json({ message: 'User deleted' });

module.exports = userCtrl;