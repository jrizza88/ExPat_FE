import React from 'react';

class NewPost extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: null,
            title: '',
            postBody: ''
        }
    }

    handleNewPostSubmit = e => {
        this.setState({
            ...this.state, [e.target.name]: e.target.value
        })
    }

    addPost = e => {
        e.preventDefault();
        
    }

    render(){
        return (
            <div>
                <h1>New Posts</h1>
                <form onSubmit={this.addPost}>
                    <input 
                    type="text"
                    name="title"
                    onChange={this.handleNewPostSubmit}
                    value={this.state.title}
                    />
                    <textarea 
                    type="text"
                    name="postBody"
                    onChange={this.handleNewPostSubmit}
                    value={this.state.postBody}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default NewPost