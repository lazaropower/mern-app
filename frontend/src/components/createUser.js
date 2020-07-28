import React, { Component } from "react";
import axios from "axios";

export default class createUser extends Component {
  state = {
    users: [],
    username: "",
  };

  // To get the data from the server
  async componentDidMount() {
    this.getUsers();
    console.log(this.state);
  }

  // Get users from server
  getUsers = async () => {
    const res = await axios.get("http://localhost:4000/api/users");
    this.setState({ users: res.data });
  };

  // Change the username state
  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  // Delete the user
  deleteUser = async (id) => {
    await axios.delete("http://localhost:4000/api/users/" + id);
    // Udpate the table
    this.getUsers();
  };

  // Create new user
  onSubmit = async (e) => {
    // Prevent refreshing whole page
    e.preventDefault();
    // Save username in the database
    await axios.post("http://localhost:4000/api/users", {
      username: this.state.username,
    });
    // Clear the username typed
    this.setState({ username: "" });
    // Update the users list
    this.getUsers();
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card card-body">
            <h3>Create new user</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                />
              </div>
              <button type="submite" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>

        <div className="col-md-8">
          <h3>Users list</h3>
          <ul className="list-group">
            {this.state.users.map((user) => (
              <li
                className="list-group-item list-group-item-action"
                key={user._id}
                onDoubleClick={() => this.deleteUser(user._id)}
              >
                {user.username}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
