import React from 'react';
import { Route, withRouter, Redirect } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from "./Components/Home";
import { Button } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" render={() => <Home />} />
        Hello!
        <Button color="primary">ExPat!</Button>
    </div>
  );
}

export default App;
