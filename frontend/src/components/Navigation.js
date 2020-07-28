import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="#">
           <i className="fa fa-sticky-note-o text-warning" aria-hidden="true"></i> <b>Reminders</b>App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <Link className="nav-item nav-link" to="/">
                Reminders 
              </Link>
              <Link className="nav-item nav-link" to="/create">
                Create
              </Link>
              <Link className="nav-item nav-link" to="/user">
                CreateUser
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
