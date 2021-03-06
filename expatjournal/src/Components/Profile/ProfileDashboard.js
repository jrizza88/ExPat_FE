import React from "react";
import Profile from "./Profile";
import axios from "axios";

class ProfileDashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                posts: [],
                user_id: null,
                userProfile: [{
                    name: '',
                    id: '',
                    user_id: '',
                    created_at: '',
                    title: '',
                    description: ''
                }]
        }
    }
// https://expat-lambda.herokuapp.com/api/user/:id

// componentDidMount is not being mounted.. may need to move pass it somewhere else. 
    componentDidMount = () => {
        // console.log('props... for user login', this.props.user_id)
        // const user_id = this.props.match.params.data
        const user_id = this.props.match.params.id
        // console.log('this.props in component did mount', this.props)
        console.log('match.params..', this.props.match.params)
        console.log('match.params.user_id ', this.props.match.params.user_id)
        // const user_id = this.props.match.params.user_id
        console.log('id mounted', user_id )
        // Authorization VS authorization
        const headers = { Authorization: localStorage.getItem('jwt') };
        console.log('headers', headers)
        //axios.get(`https://expat-lambda.herokuapp.com/api/user/${user_id}`,
        axios.get(`https://expat-lambda.herokuapp.com/api/user/posts/${user_id}`,
        {headers})
        
        .then(response => {
            // console.log('user_id', user_id)
            console.log('response....', response)
            console.log('response.data: ', response.data)
            // console.log('data? user', response.user.data)
            console.log("user id", response.user_id)
            this.setState({
                posts: response.data.length,
                userProfile: response.data
                
                    // id: response.data.user_id,
                    // name: response.data.name
            })
        })
        .catch(error => {
                console.error("GET error occured!", error);
        });
        
}

renderUserPosts = id => {
    const user_id = this.props.match.params.id
    // console.log('this.props in component did mount', this.props)
    console.log('match.params..', this.props.match.params)
    console.log('match.params.user_id ', this.props.match.params.user_id)
    // const user_id = this.props.match.params.user_id
    console.log('id mounted', user_id )
    // Authorization VS authorization
    const headers = { Authorization: localStorage.getItem('jwt') };
    console.log('headers', headers)
     axios.get(`https://expat-lambda.herokuapp.com/api/user/${user_id}`,
    // axios.get(`https://expat-lambda.herokuapp.com/api/user/posts/${user_id}`,
    {headers})
    
    .then(response => {
        // console.log('user_id', user_id)
        console.log('response....', response)
        console.log('response.data: ', response.data)
        // console.log('data? user', response.user.data)
        console.log("user id", response.user_id)
        this.setState({
            posts: response.data.length,
            userProfile: response.data
            
                // id: response.data.user_id,
                // name: response.data.name
        })
    })
    .catch(error => {
            console.error("GET error occured!", error);
    });
    
}

    renderPosts = (id) => {
        return (
           <div>You have created {this.state.posts} posts.</div> 
        )
    }


    render(){
        // console.log('this.props', this.props)
        console.log('state', this.state)
        return (
            
            <div>
                {this.renderPosts()}
                                  {/* <Profile {...this.state} /> */}
                <ul>
                    
                     {this.state.userProfile.map(user => {
                       
                        return <Profile 
                            name={user.name} 
                            key={user.id}
                            user_id={user.user_id}
                            created_at={user.created_at}
                            title={user.title}
                            text={user.description}
                        />
                        
   
                     }
                     
                    )}
                </ul>
               
            </div>
        )
    }
}

export default ProfileDashboard;