import React from 'react';
import { NavLink, withRouter } from "react-router-dom";
import { Nav, NavItem } from 'reactstrap';
import {Navbar} from 'react-bootstrap';


const NavBar = props => {

    const logout = () => {
        localStorage.removeItem('jwt');
        props.history.push('/login')
        console.log('logout pressed', logout)
    }
    return (
        
        <>
         <Navbar bg="light" variant="light">
            <Nav>
                <NavItem> 
                    <Navbar.Brand ><NavLink href="#" exact to="/">Home</NavLink></Navbar.Brand>
                </NavItem>
                
                <NavItem> 
           
                <Navbar.Brand > <NavLink href="#" to="/profile">
                        Profile
                    </NavLink>
                    </Navbar.Brand>
                </NavItem>
               
            <NavItem> 
           
           <Navbar.Brand > <NavLink href="#" to="/journal">
                   Journal
               </NavLink>
               </Navbar.Brand>
           </NavItem>
                
                <NavItem> 
              
                <Navbar.Brand > <NavLink href="#" exact to="/messages">
                        Messages
                    </NavLink>
                    </Navbar.Brand>
                </NavItem>
                

              
                    <NavItem> 
                  
                    <Navbar.Brand > <NavLink href="#" exact to="/login" onClick={logout}>
                            Logout
                        </NavLink>
                        </Navbar.Brand>
                    </NavItem>
               
            </Nav>
       </Navbar>
        </>
    )
}

export default withRouter(NavBar);