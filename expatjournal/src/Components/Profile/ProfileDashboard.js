import React from "react";
import Profile from "./Profile";
import axios from "axios";

class ProfileDashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                name: "Jamar",
                id: "",
                posts: [2]
        }
    }
// https://expat-lambda.herokuapp.com/api/user/:id
    componentDidMount = () => {
        const id = this.props.match.params.id;
        console.log('this.props', this.props)
        console.log('match.params..', this.props.match.params)
        console.log('match.params.id', this.props.match.params.id)
        console.log('id mounted', id)
        const headers = { authorization: localStorage.getItem('jwt') };
        axios.get(`https://expat-lambda.herokuapp.com/api/user/${id}`,
        {headers})
        .then(response => {
            console.log(response.data)
            console.log('data? user', response.user.data)
            console.log("user id", id)
            this.setState({
                    id: response.data.id,
                    name: response.data.name

            })
        .catch(error => console.error('GET response error user id', error))
        });
    }
    render(){
        return (
            <div>
                                  <Profile {...this.state} />
                {/* <ul>
                     {this.state.users.map(user => {
                        return (
                        <Profile name={user.name} id={user.id} key={user.id}/>
                        )
                    })}
                </ul> */}
                  {/* <Profile name={this.state.name} id={this.state.id} posts={this.state.posts} /> */}
                {/* <Container>
                    <Row>
                        <Col sx={12} md={8}>
                            <div>Latest three posts</div>
                        </Col>
                        <Col sx={12} md={8}>
                            <div>Latest three photos</div>
                        </Col>
                    </Row>
                </Container> */}
            </div>
        )
    }
}

export default ProfileDashboard;