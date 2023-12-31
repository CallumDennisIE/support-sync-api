// React imports
import React, { useEffect, useState } from "react";

// Network based imports
import { useLocation } from "react-router";
import { axiosReq } from "../api/axiosDefaults";
import { fetchMoreData } from "../utils/utils";
import { useCurrentUser } from '../contexts/CurrentUserContexts';

// Package based imports
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import InfiniteScroll from "react-infinite-scroll-component";

// Custom component imports
import Asset from './Asset';
import ListTicketItem from "./ListTicketItem";


function TicketsPage({ filter = "" }) {
    const [tickets, setTickets] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();
    const currentUser = useCurrentUser();

    // Fetch all requested tickets
    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const { data } = await axiosReq.get(`/tickets/?${filter}`);
                setTickets(data);
                setHasLoaded(true);
            } catch (err) {
                //console.log(err);
            }
        };
        setHasLoaded(false);
        fetchTickets();
    }, [filter, pathname, currentUser]);

    return (
        <Row className="h-100">
            <Col className="container-sm">
                <p>Tickets</p>
                {hasLoaded ? (
                    <>
                        {tickets.results.length ? (
                            <InfiniteScroll
                                children={
                                    tickets.results.map((ticket) => (
                                        <ListTicketItem key={ticket.id} {...ticket} />
                                    ))
                                }
                                dataLength={tickets.results.length}
                                loader={<Asset spinner />}
                                hasMore={!!tickets.next}
                                next={() => fetchMoreData(tickets, setTickets)}
                            />
                        ) : (<p>Sorry there is no results</p>)}
                    </>
                ) : (
                    <Container>
                        <Asset spinner />
                    </Container>
                )}
            </Col>
        </Row>
    );
}

export default TicketsPage;