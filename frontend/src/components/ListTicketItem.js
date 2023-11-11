import React from 'react';
import { Card, Col, Row, Container, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const ListTicketItem = (props) => {
    const {
        id,
        owner,
        ticket_id,
        title,
        description,
        status,
        visibility,
        priority,
        created_at,
        updated_at,
        ticket
    } = props;
    return (
        <div>
            <Container>
                <Card>
                    <Row>
                        <Col>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{description}</Card.Text>
                        </Col>
                        <Col>
                            <ListGroup>
                                <ListGroup.Item><i className="fa-regular fa-circle-check"></i> {status}</ListGroup.Item>
                                <ListGroup.Item><i className="fa-solid fa-bullhorn"></i> {priority}</ListGroup.Item>
                                <ListGroup.Item><i className="fa-regular fa-address-book"></i> {owner}</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Card.Body>
                        <Link to={`/tickets/${id}`}>
                            <Button variant="primary">Open Ticket</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default ListTicketItem;