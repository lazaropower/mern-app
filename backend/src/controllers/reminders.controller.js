const remindersCtrl = {};

remindersCtrl.getReminders = (req, res) => res.json({ message: [] });

remindersCtrl.getReminder = (req, res) => res.json({ title: 'Titulo' });

remindersCtrl.createReminder = (req, res) => res.json({ message: 'Reminder saved' });

remindersCtrl.updateReminder = (req, res) => res.json({ message: 'Reminder updated ' });

remindersCtrl.deleteReminder = (req, res) => res.json({ message: 'Reminder deleted' });

module.exports = remindersCtrl;