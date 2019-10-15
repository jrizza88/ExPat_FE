import React from 'react';

const Profile = props => {
  
return (
    <>
        <h1>Welcome back, {props.name}!</h1>
        <h2>You have {props.posts} posts!</h2>
            
    </>
)
};

export default Profile;