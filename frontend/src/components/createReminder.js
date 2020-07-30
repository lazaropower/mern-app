import React, { Component } from "react";
import axios from "axios";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default class createReminder extends Component {
  state = {
    users: [],
    userSelected: '',
    title: '',
    content: '',
    date: new Date()
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/api/users");
    this.setState({ users: res.data.map((user) => user.username) });
    console.log(this.state.users);
  }

  onSubmit = (e) => {
    console.log(this.state.title, this.state.content)
    e.preventDefault();
  };

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onChangeDate = date => {
    this.setState({date: date})
  }

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <div className="card card-body">
          <h3>Create reminder</h3>

          {/* SELECT USER */}
          <div className="form-group">
            <select
              className="form-control"
              name="userSelected"
              onChange={this.onInputChange}
            >
              {this.state.users.map((user) => (
                <option key={user} value={user}>
                  {user}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              name="title"
              onChange={this.onInputChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="content"
              className="form-control"
              placeholder="Content"
              onChange={this.onInputChange}
              required
            ></textarea>
          </div>

          <div className="form-group">
            <DatePicker
              className="from-control"
              selected={this.state.date}
              onChange={this.onChangeDate}
              />
          </div>
          

          <form onSubmit={this.onSubmit}>
            <button type="submit" class="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}
