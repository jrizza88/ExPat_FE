import React from 'react';
import Posts from '../Posts/Posts';


const Journal = props => {
    console.log('journal', props)
    return (
        <div>
            <h1>Journal</h1>
            {
            props.posts.map(post => (
               <Posts key={post.id} post={post}/> )) 
            }
        </div>
    )
}

export default Journal