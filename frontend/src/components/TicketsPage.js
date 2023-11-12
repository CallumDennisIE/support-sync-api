import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../api/axiosDefaults";
import { fetchMoreData } from "../utils/utils";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import InfiniteScroll from "react-infinite-scroll-component";

import Asset from './Asset';
import ListTicketItem from "./ListTicketItem";

function TicketsPage({ message, filter = "" }) {
    const [tickets, setTickets] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const { data } = await axiosReq.get(`/tickets/?${filter}`);
                setTickets(data);
                setHasLoaded(true);
            } catch (err) {
                console.log(err);
            }
        };
        setHasLoaded(false);
        fetchTickets();
    }, [filter, pathname]);

    return (
        <Row className="h-100">
            <Col className="py-2 p-0 p-lg-2" lg={8}>
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