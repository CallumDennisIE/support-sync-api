import React, { useEffect, useState } from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import TicketContent from "./TicketContent";
import { useParams } from 'react-router';
import { axiosReq } from '../api/axiosDefaults';
import { useHistory } from "react-router";

const Ticket = () => {

    const { id } = useParams();
    const [ticket, setTicket] = useState({ results: [] });

    const history = useHistory();

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
                <Button variant="primary" onClick={() => history.goBack()}>
                    Cancel
                </Button>
            </Container>
        </div>
    );
};

export default Ticket;