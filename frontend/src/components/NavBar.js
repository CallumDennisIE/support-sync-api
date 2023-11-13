// React import
import React from 'react';

// Network based imports
import axios from "axios";
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContexts';
import { NavLink } from 'react-router-dom';
import { removeTokenTimestamp } from '../utils/utils';

// Package based imports
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Custom component import
import Avatar from './Avatar';

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    // Provide user sign out handler
    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
            removeTokenTimestamp();
        } catch (err) {
            //console.log(err);
        }
    };

    // Define icon for creating a ticket
    const addTicketIcon = (
        <NavLink to="/create-ticket">Create Ticket</NavLink>
    );

    // Define tickets to be viewed when not authenticated
    const loggedOutIcons = (
        <>
            <NavLink to="/signin">Sign In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
        </>
    );

    // Define tickets to be viewed when authenticated
    const loggedInIcons = (
        <>
            <NavLink to="/tickets">View Tickets</NavLink>
            <NavLink to="/" onClick={handleSignOut}>Log Out</NavLink>
            <Avatar src={currentUser?.profile_image} text={currentUser?.username} height={40} />
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