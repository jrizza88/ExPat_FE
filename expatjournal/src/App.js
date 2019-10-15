import React from 'react';
import { Route, withRouter, Redirect } from "react-router-dom";
import NavBar from './Components/NavBar';
import Login from './Components/Auth/Login';
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/login" render={() => <Login />} />
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/profile" render={() => <Profile />} />
    </div>
  );
  }
}

export default App;
