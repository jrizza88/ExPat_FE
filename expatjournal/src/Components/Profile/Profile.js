import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Profile = props => {
    console.log("profile props", props)
//   const users = props.name.map((user, i) => (
//       <div key={i}>
//           <h1>Welcome back {user.name} !</h1>
//           <h2>Your user id is: {user.id}</h2>
//       </div>
//   ));
//   console.log("profile props 2", props)
return (
    <>
    <Container>
        <h1>Welcome back, {props.name}!, {props.id}</h1>
        <h2>You have {props.posts} posts!</h2>
         <Container>
                    <Row>
                        <Col sx={12} md={8}>
                            <div>Latest three posts</div>
                        </Col>
                        <Col sx={12} md={8}>
                            <div>Latest three photos</div>
                        </Col>
                    </Row>
                </Container>
    </Container>
    </>
)
};

export default Profile;