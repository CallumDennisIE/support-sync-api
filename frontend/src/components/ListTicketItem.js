// React import
import React from 'react';

// Network based import
import { Link } from "react-router-dom";

// Package based imports
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const ListTicketItem = (props) => {
    const {
        id,
        owner,
        title,
        status,
        priority,
    } = props;
    return (
        <div>
            <Container>
                <Card>
                    <Card.Title>{title}</Card.Title>
                    <Row>
                        <Col><i className="fa-regular fa-circle-check"></i> {status}</Col>
                        <Col><i className="fa-solid fa-bullhorn"></i> {priority}</Col>
                        <Col><i className="fa-regular fa-address-book"></i> {owner}</Col>
                    </Row>
                    <Card.Body>
                        <Link to={`/tickets/${id}`}>
                            <Button variant="primary">Open Ticket</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Container>
        </div >
    );
};

export default ListTicketItem;