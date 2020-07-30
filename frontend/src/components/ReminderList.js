import React, { Component } from "react";
import axios from "axios";
import { format } from "timeago.js";

export default class ReminderList extends Component {
  state = {
    reminders: [],
  };

  componentDidMount() {
    this.getReminders();
  }

  async getReminders(){
    const res = await axios.get("http://localhost:4000/api/reminders");
    this.setState({ reminders: res.data });
  }

  deleteReminder = async (id) => {
    await axios.delete("http://localhost:4000/api/reminders/" + id);
    this.getReminders();
  };

  render() {
    return (
      <div className="row">
        {this.state.reminders.map((reminder) => (
          <div className="col-md-4 p-2" key={reminder._id}>
            <div className="card">
              <div className="card-header">
                <h5>{reminder.title}</h5>
              </div>
              <div className="card-body">
                <p>{reminder.content}</p>
                <p>
                  <b>{reminder.author}</b>
                </p>
                <p>
                  <i>{format(reminder.date)}</i>
                </p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-danger"
                  onClick={() => this.deleteReminder(reminder._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
