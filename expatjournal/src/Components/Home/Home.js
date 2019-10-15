import React from 'react';
import HomeImage from '../../Assets/HomePagePhoto.png';
import '../../App.css';
import { NavLink } from "react-router-dom";
import { Button } from 'reactstrap';


const Home = props => {
    return (
        <>
        <img src={HomeImage} alt="home" className="big"/>
        <div>Welcome to the Expat Application!</div>
        <Button color="primary"><NavLink href="#" to="/login">ExPat!</NavLink></Button>
        </>
    )
}

export default Home;