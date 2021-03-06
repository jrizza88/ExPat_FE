import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const Profile = props => {
    // console.log("profile props", props)
return (
    <>
    <Container key={props.id}>
        <h3>{props.user_id}</h3>
         <Container>
                    <Row>
                        <Card style={{width: '18rem'}}>
                            <CardImg variant="top" src="https://101oftraveling.files.wordpress.com/2014/11/travel.jpg" />
                            <div>{props.created_at}</div>
                            <CardBody>
                                <CardTitle>{props.title}</CardTitle>
                                
                                <CardText>
                               {props.text}
                                </CardText>
                                <Button variant="primary">Go somewhere</Button>
                            </CardBody>
                
                        </Card>
                        {/* <Col sx={12} md={8}>
                            <div>Latest three posts</div>
                        </Col>
                        <Col sx={12} md={8}>
                            <div>Latest three photos</div>
                        </Col> */}
                    </Row>
                </Container>
    </Container>
    </>
)
};

export default Profile;