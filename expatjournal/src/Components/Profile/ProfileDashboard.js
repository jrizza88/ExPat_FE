import React from "react";
import Profile from "./Profile";
import axios from "axios";

class ProfileDashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                userProfile: [{
                    name: "J",
                    id: '',
                    posts: [2],
                    postTitle: [],
                    postMessage: []
                }]
        }
    }
// https://expat-lambda.herokuapp.com/api/user/:id

// componentDidMount is not being mounted.. may need to move pass it somewhere else. 
    componentDidMount = () => {
        const id = this.props.match.params.id;
        console.log('this.props in component did mount', this.props)
        console.log('match.params..', this.props.match.params)
        console.log('match.params.id', this.props.match.params.id)
        console.log('id mounted', id)
        const headers = { authorization: localStorage.getItem('jwt') };
        axios.get(`https://expat-lambda.herokuapp.com/api/user/${id}`,
        {headers})
        .then(response => {
            console.log('response.data: ', response.data)
            console.log('data? user', response.user.data)
            console.log("user id", id)
            this.setState({
                    id: response.data.id,
                    name: response.data.name

            })
        .catch(error => console.error('GET response error user id', error))
        });
    }


    render(){
        console.log('this.props', this.props)
        console.log('state', this.state)
        return (
            
            <div>
                                  {/* <Profile {...this.state} /> */}
                <ul>
                     {this.state.userProfile.map(user => (
                       
                        <Profile 
                            name={user.name} 
                            posts={user.posts}
                            key={user.id}
                            title={user.postTitle}
                            text={user.postMessage}
                        />
                        
   
                     )
                    )}
                </ul>
               
            </div>
        )
    }
}

export default ProfileDashboard;