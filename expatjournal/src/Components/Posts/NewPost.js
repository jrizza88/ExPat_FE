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

            </div>
        )
    }
}

export default NewPost