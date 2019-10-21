import React from "react";
import axios from 'axios';
import { Redirect } from "react-router-dom";
// import { Button } from 'reactstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            toProfilePage: false
        }
        
    }

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    handleLogin = event => {
        event.preventDefault();

        const endpoint = "https://expat-lambda.herokuapp.com/api/login"

        axios.post(endpoint, this.state)
        .then(res => {
            console.log('post login request', res)
            console.log('post request...', res.data)
            localStorage.setItem('jwt', res.data.token)
            console.log('login response', res.data)           
            console.log('login token', res.data.token)
        }).catch( e=> {
            console.error(e)
            }
        )
    }

  render(){
      return (
          <>
            <div>Login to get started!</div>
                <div>
                    <form onSubmit={this.handleLogin}>
                        <label htmlFor="username">username</label>
                        <input 
                            placeholder="Enter username here"
                            name="username"
                            // id="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            type="text"
                        />
                        <label htmlFor="password">password</label>
                        <input
                            placeholder="password.."
                            name="password"
                            // id="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="text"
                        />
                        <div>
                        <Button color="primary" type="submit">Submit</Button>
                        </div>
                    </form>
                    
                </div>
            <div>Register... you're missing out on the fun!</div>
          </>
      )
  }
}

export default Login;