import React from 'react';
import { withRouter, NavLink } from "react-router-dom";
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            password: ""
        }
    }

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({[name]: value})
        console.log('registration target', e.target.value)
    }

    handleRegistration = e => {
       e.preventDefault();

       const endpoint = `https://expat-lambda.herokuapp.com/api/register`

       axios.post(endpoint, this.state)
       .then(res => {
           localStorage.setItem('jwt', res.data.token)
           this.props.history.push('/login')
           console.log('regis response', res.data)
           console.log('registration token', res.data.token)
       })
       .catch(error => {
           console.error('error registering ', error)
       })
    }

    render(){
        return (
            <>
            <h2>Register a new user</h2>
            <form onSubmit={this.handleRegistration}>
            <label htmlFor="username">username</label>
                        <input 
                            placeholder="Enter username here"
                            name="username"
                            id="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            type="text"
                        />
                        <label htmlFor="password">password</label>
                        <input
                            placeholder="create a password.."
                            name="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="text"
                        />
                        <Button variant="primary" type="submit">Create User</Button>
                        <Button variant="warning" type="submit"><NavLink href="#" to="/login">I have an account</NavLink></Button>
            </form>
            </>
        )
    }
}

export default withRouter(Register);
