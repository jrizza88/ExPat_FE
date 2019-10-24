import React from "react";
import Profile from "./Profile";
import axios from "axios";

class ProfileDashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                name: "",
                id: null,
                posts: []
            }
        }
    }
// https://expat-lambda.herokuapp.com/api/user/:id
    componentDidMount = (id) => {
        // const id = this.state.user;
        axios.get(`https://expat-lambda.herokuapp.com/api/user/${id}`,
        {headers: {Authorization: localStorage.getItem("jwt") }})
        .then(response => {
            console.log(response.data)
            console.log('data? user', response.user.data)
            console.log("user id", id)
            this.setState({
                ...this.state.user, user:{
                    id: response.data.id,
                    name: response.data.name
                }

            })
        .catch(error => console.error('GET response error user id', error))
        });
    }
    render(){
        return (
            <div>
                  < Profile name={this.state.user.name} id={this.state.user.id}/>
            </div>
        )
    }
}

export default ProfileDashboard;