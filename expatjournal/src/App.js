import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, withRouter, Redirect } from "react-router-dom";
import NavBar from './Components/NavBar';
import Login from './Components/Auth/Login';
import Home from "./Components/Home/Home";
import ProfileDashboard from "./Components/Profile/ProfileDashboard";
// import Profile from "./Components/Profile/Profile";

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/login" render={() => <Login />} />
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/profile" render={() => <ProfileDashboard />} />
    </div>
  );
  }
}

export default App;
