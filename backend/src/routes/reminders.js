const { Router } = require('express');
const router = Router();

const { getReminders, createReminder, getReminder, updateReminder, deleteReminder } = require('../controllers/reminders.controller');

router.route('/')
    .get(getReminders)
    .post(createReminder);

router.route('/:id')
    .get(getReminder)
    .put(updateReminder)
    .delete(deleteReminder);

module.exports = router;