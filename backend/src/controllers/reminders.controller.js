const remindersCtrl = {};

const Reminder = require("../models/Reminder");

remindersCtrl.getReminders = async (req, res) => {
  const reminders = await Reminder.find();
  res.json(reminders);
};

remindersCtrl.getReminder = async (req, res) => {
  const reminder = await Reminder.findById(req.params.id);
  res.json(reminder);
};

remindersCtrl.createReminder = async (req, res) => {
  const { title, content, author, date } = req.body;
  const newReminder = new Reminder({
    title,
    content,
    author,
    date,
  });
  await newReminder.save();
  res.json({ message: "Reminder saved" });
};

remindersCtrl.updateReminder = async (req, res) => {
  const { title, content, author, date } = req.body;
  await Reminder.findOneAndUpdate(
    { _id: req.params.id },
    {
      title,
      content,
      date,
      author,
    }
  );
  res.json({ message: "Reminder updated" });
};

remindersCtrl.deleteReminder = async (req, res) => {
  await Reminder.findOneAndDelete({ _id: req.params.id });
  res.json({ message: "Reminder deleted" });
};

module.exports = remindersCtrl;
