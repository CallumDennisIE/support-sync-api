import React from 'react'
import {Card, Col, Row, Container, Button, ListGroup} from "react-bootstrap"

const ListTicketItem = (props) => {
  return (
    <div>
        <Container>
            <Card>
                <Row>
                    <Col>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>{props.description}</Card.Text>
                    </Col>
                    <Col>
                    <ListGroup>
                        <ListGroup.Item><i class="fa-regular fa-circle-check"></i> {props.status}</ListGroup.Item>
                        <ListGroup.Item><i class="fa-regular fa-eye"></i> {props.visibility}</ListGroup.Item>
                        <ListGroup.Item><i class="fa-solid fa-bullhorn"></i> {props.priority}</ListGroup.Item>
                        <ListGroup.Item><i class="fa-regular fa-address-book"></i> {props.requestor}</ListGroup.Item>
                        <ListGroup.Item><i class="fa-regular fa-user"></i> {props.supporter}</ListGroup.Item>
                    </ListGroup>
                    </Col>
                </Row>
                <Card.Body>
                    <Card.Text>    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}

export default ListTicketItem