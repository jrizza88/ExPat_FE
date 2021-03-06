import React from 'react';
import HomeImage from '../../Assets/HomePagePhoto.png';
import '../../App.css';
import { NavLink } from "react-router-dom";
import { Button } from 'reactstrap';


const Home = props => {
    return (
        <>
        <img src={HomeImage} alt="home" className="big"/>
        <div className="logo">Welcome to Expat!</div>
        <Button variant="light"><NavLink href="#" className="urls" to="/login">Login</NavLink></Button>
        </>
    )
}

export default Home;