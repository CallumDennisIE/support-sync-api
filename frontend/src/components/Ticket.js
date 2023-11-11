import React, { useEffect, useState } from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import TicketContent from "./TicketContent";
import { useParams } from 'react-router';
import { axiosReq } from '../api/axiosDefaults';

const Ticket = () => {

    const { id } = useParams();
    const [ticket, setTicket] = useState({ results: [] });

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
            </Container>
        </div>
    );
};

export default Ticket;