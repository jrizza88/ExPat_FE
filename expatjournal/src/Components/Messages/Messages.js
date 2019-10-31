import React from 'react';
// import axios from 'axios';

class Messages extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            messages: []
        }
        
    }
    render(){
        return (
            <div>
                Messages Component
            </div>
        )
    }
}

export default Messages;