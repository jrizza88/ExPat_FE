import React from 'react';

import { Route, withRouter, Redirect } from "react-router-dom";
import NavBar from './Components/NavBar';
import Login from './Components/Auth/Login';
import Register from "./Components/Auth/Register";
import Home from "./Components/Home/Home";
import ProfileDashboard from "./Components/Profile/ProfileDashboard";
import Messages from "./Components/Messages/Messages";
import Journal from "./Components/Journal/Journal";
// import Profile from "./Components/Profile/Profile";

const PrivateRoute = ({ component: Component, render, ...rest}) => (
  
  <Route {...rest} 
  render={
    props =>
    localStorage.getItem("jwt") ? (
      Component ? (
        <Component {...props} />
      ) : (
        render(props)
      )
    ) : (
      <Redirect to="/login" />
    )
  } />
);

const App = () => {

  // render(){
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/login" render={() => <Login />} />
      <Route exact path="/register" render={() => <Register />} />
      <Route exact path="/" render={() => <Home />} />
      <PrivateRoute exact path="/profile/:id" render={(props) => <ProfileDashboard {...props} />} />
      {/* <PrivateRoute path="/profile/:id" render={(props) => <ProfileDashboard {...props} />} /> */}
      <PrivateRoute exact path="/messages" render={(props) => <Messages {...props} />} />
      <PrivateRoute exact path="/journal" render={(props) => <Journal {...props} />}  />
    </div>
  );
  }
// }

export default withRouter(App);
