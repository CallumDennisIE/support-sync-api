import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContexts';
import Avatar from './Avatar';
import axios from "axios";

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
        } catch (err) {
            console.log(err);
        }
    };


    const addTicketIcon = (
        <NavLink to="/create-ticket">Create Ticket</NavLink>
    );
    const loggedOutIcons = (
        <>
            <NavLink to="/signin">Sign In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
        </>
    );
    const loggedInIcons = (
        <>
            <NavLink to="/tickets">View Tickets</NavLink>
            <NavLink to="/" onClick={handleSignOut}>Log Out</NavLink>
            <NavLink to={`/profiles/${currentUser?.profile_id}`}>
                <Avatar src={currentUser?.profile_image} text="My Profile" height={40} />
            </NavLink>
        </>
    );


    return (
        <div>
            <Navbar bg="light" expand="lg">
                <NavLink exact to="/">
                    <Navbar.Brand href="#home">SupportSync</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {currentUser && addTicketIcon}
                        {currentUser ? loggedInIcons : loggedOutIcons}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;