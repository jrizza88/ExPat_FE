import React from "react";
import axios from 'axios';
import { Button } from 'reactstrap';

class LoginRegister extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
            toProfilePage: false
        }
    }

    handleChange = event => {
        this.setState = ({
            [event.target.name]: event.target.value
        })
        console.log('event target', event.target.value)
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
                            name="userName"
                            id="userName"
                            value={this.state.userName}
                            onChange={this.handleChange}
                            type="text"
                        />
                        <label>passsword</label>
                        <input
                            placeholder="password.."
                            name="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="text"
                        />
                        <div>
                        <Button color="primary">ExPat!</Button>
                        </div>
                    </form>
                    
                </div>
            <div>Register... you're missing out on the fun!</div>
          </>
      )
  }
}

export default LoginRegister;