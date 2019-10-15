import React from "react";
import Profile from "./Profile";

class ProfileDashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            posts: []
        }
    }
    render(){
        return (
            <div>
                  < Profile />
            </div>
        )
    }
}

export default ProfileDashboard;