import React from 'react';
import Posts from '../Posts/Posts';
import NewPost from '../Posts/NewPost';

class Journal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            journalPosts: []
        }
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
            </div>
        )
    }

}

export default Journal