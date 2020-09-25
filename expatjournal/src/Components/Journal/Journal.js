import React from 'react';
import axios from "axios";
import { Route, withRouter } from 'react-router-dom';
import Posts from '../Posts/Posts';
import NewPost from '../Posts/NewPost';

class Journal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            journalPosts: [{
                title: '',
                postBody: ''
            }]
        }
    }
    // https://expat-lambda.herokuapp.com/api/posts
    addPost = posts => {
        axios
        .post(`https://expat-lambda.herokuapp.com/api/posts`, posts)
        .then(response => {
            console.log('new post id...', posts.id)
            console.log('response in response post', response)
            this.setState(prevState => ({journalPosts: [...prevState.journalPosts, posts]}))
            
             }
        )
        .catch(error => console.error('new journal post error', error))
     }
    render(){
        return (
            <div>
                <h1>Journal</h1>
                {
                this.state.journalPosts.map((post, id) => (
                    
                   <Posts key={id} post={post}/> )) 
                }
                <NewPost />
                <Route
         exact path="/addPost"
          render={props => <NewPost
            {...props} 
            addPost={this.addPost} 
            journalPosts={this.state.journalPosts}/>}
        />
            </div>
        )
    }

}

export default Journal