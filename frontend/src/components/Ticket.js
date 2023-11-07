import React, { useEffect, useState } from 'react'
import Container from "react-bootstrap/Container"
import TicketContent from "./TicketContent"
import { useParams } from 'react-router'
import { axiosReq } from '../api/axiosDefaults'

const Ticket = () => {

    const { id } = useParams();
    const [ticket, setTicket] = useState({ results: [] });

    useEffect(() =>{
        const handleMount = async () => {
            try {
                const [{data: ticket}] = await Promise.all([
                    axiosReq.get(`/tickets/${id}`)
                ])
                setTicket({results: [ticket]})
                console.log('Ticket: ')
                console.log(ticket)
            } catch(err) {
                console.log(err);
            }
        }
        handleMount()
    }, [id])

    return (
        <div>
            <Container>
                <TicketContent {...ticket.results[0]} setTickets={setTicket} />
            </Container>
        </div>
    )
}

export default Ticket