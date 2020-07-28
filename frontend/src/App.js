import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import Navigation from "./components/Navigation";
import ReminderList from "./components/ReminderList";
import createUser from "./components/createUser";
import createReminder from "./components/createReminder";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Route path="/" exact component={ReminderList} />{" "}
        <Route path="/edit/:id" exact component={createReminder} />{" "}
        <Route path="/create" exact component={createReminder} />{" "}
        <Route path="/user" exact component={createUser} />
      </div>
    </Router>
  );
}

export default App;
