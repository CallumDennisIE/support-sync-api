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
        <NavLink to="/create-ticket"><i className="fa-solid fa-circle-plus fs-3"></i>Create Ticket</NavLink>
    );

    // Define tickets to be viewed when not authenticated
    const loggedOutIcons = (
        <>
            <NavLink to="/signin"><i className="fa-solid fa-lock fs-3"></i> Sign In</NavLink>
            <NavLink to="/signup"><i className="fa-solid fa-user-plus fs-3"></i> Sign Up</NavLink>
        </>
    );

    // Define tickets to be viewed when authenticated
    const loggedInIcons = (
        <>
            <NavLink to="/tickets"><i className="fa-solid fa-magnifying-glass fs-3"></i> View Tickets</NavLink>
            <NavLink to="/" onClick={handleSignOut}><i className="fa-solid fa-lock-open"></i> Log Out</NavLink>
            <p><i class="fa-solid fa-user">{currentUser?.username}</i></p>
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