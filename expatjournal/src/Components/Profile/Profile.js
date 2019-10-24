import React from 'react';
import Container from 'react-bootstrap/Container';

const Profile = props => {
  
return (
    <>
    <Container>
        <h1>Welcome back, {props.name}!, {props.id}</h1>
        <h2>You have {props.posts} posts!</h2>
    </Container>
    </>
)
};

export default Profile;