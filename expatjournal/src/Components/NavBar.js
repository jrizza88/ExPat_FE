import React from 'react';
import { NavLink } from "react-router-dom";
// import { Nav, NavItem, NavLink } from 'reactstrap';
import { Nav, NavItem } from 'reactstrap';
const NavBar = props => {

    const logout = () => {
        localStorage.removeItem('jwt');
        props.history.push('/')
        console.log('logout pressed', props.logout)
    }
    return (
        
        <>
            <Nav>
                <NavItem> 
                    <NavLink href="#" exact to="/">Home</NavLink>
                </NavItem>
                <NavItem> 
                    <NavLink href="#" to="/profile">
                        Profile
                    </NavLink>
                </NavItem>
                <NavItem> 
                    <NavLink href="#" exact to="/messages">
                        Messages
                    </NavLink>
                </NavItem>
                <NavItem> 
                    <NavLink href="#" exact to="/login" onClick={logout}>
                        Logout
                    </NavLink>
                </NavItem>
            </Nav>
        </>
    )
}

export default NavBar;