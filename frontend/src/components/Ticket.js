import React, { useEffect, useState } from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import TicketContent from "./TicketContent";
import { useParams } from 'react-router';
import { axiosReq } from '../api/axiosDefaults';
import { useCurrentUser } from '../contexts/CurrentUserContexts';
import CommentCreateForm from "./CreateComment";

const Ticket = () => {

    const { id } = useParams();
    const [ticket, setTicket] = useState({ results: [] });

    const currentUser = useCurrentUser();
    const profile_image = currentUser?.profile_image;
    const [comments, setComments] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: ticket }] = await Promise.all([
                    axiosReq.get(`/tickets/${id}`)
                ]);
                setTicket({ results: [ticket] });
            } catch (err) {
                console.log(err);
            }
        };
        handleMount();
    }, [id]);

    return (
        <div>
            <Container>
                <TicketContent {...ticket.results[0]} setTickets={setTicket} ticket />
                {currentUser ? (
                    <CommentCreateForm
                        profile_id={currentUser.profile_id}
                        profileImage={profile_image}
                        ticket={id}
                        setTicket={setTicket}
                        setComments={setComments}
                    />
                ) : comments.results.length ? (
                    "Comments"
                ) : null}
            </Container>
        </div>
    );
};

export default Ticket;