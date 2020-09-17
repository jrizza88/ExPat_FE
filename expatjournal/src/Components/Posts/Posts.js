import React from 'react';

const Posts = props => {
    console.log('props in Posts', props)
    return (
        
        <>
        <h1>Current posts by user</h1>
        {/* May need to collect src id from BE here */}
        <h2 id={props.id}>{props.post.title}</h2>
        <h3>{props.post.story}</h3>
        </>
    )
}

export default Posts;