import React from 'react';
import HomeImage from '../../Assets/HomePagePhoto.png';
import '../../App.css'

const Home = props => {
    return (
        <>
        <img src={HomeImage} alt="home" className="big"/>
        <div>Welcome to the Expat Application!</div>
        </>
    )
}

export default Home;