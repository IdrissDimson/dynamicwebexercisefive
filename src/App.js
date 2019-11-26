import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";

import './App.css';

import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={UserProfile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={Signup} />
        <Route exact path="/log-out" component={Logout} />
      </Router>
    </div>
  );
}

export default App;
