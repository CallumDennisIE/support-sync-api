import React from 'react';

import axios from "axios";
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContexts';
import { NavLink } from 'react-router-dom';
import { removeTokenTimestamp } from '../utils/utils';

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Avatar from './Avatar';

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
            removeTokenTimestamp();
        } catch (err) {
            //console.log(err);
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