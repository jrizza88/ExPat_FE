import React from "react";
import axios from 'axios';
import { Button } from 'reactstrap';

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
        // this.handleChange = this.handleChange.bind(this)
    }

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const endpoint = "https://expat-lambda.herokuapp.com/api/login"

        axios.post(endpoint, this.state)
        .then(res => {
            localStorage.setItem('jwt', res.data.token)
            console.log('login response', res.data)
        }).catch( event => {
            console.error(event)
            }
        )
    }

  render(){
      return (
          <>
            <div>Login to get started!</div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>username</label>
                        <input 
                            placeholder="Enter username here"
                            name="username"
                            // id="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            type="text"
                        />
                        <label>password</label>
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