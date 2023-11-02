import React from 'react'
import ListTicketItem from './ListTicketItem'
import {Form, Button, Row, Col} from "react-bootstrap"

const ListTickets = () => {
  return (
    <div>
        <Form>
            <Row>
                <Col>
                    <p>Status:</p>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="New Request" />
                        <Form.Check type="checkbox" label="In Progress" />
                        <Form.Check type="checkbox" label="Completed" />
                    </Form.Group>
                </Col>
                <Col>
                    <p>Visbility:</p>
                    <Form.Group controlId="formBasicCheckbox2">
                        <Form.Check type="checkbox" label="Public" />
                        <Form.Check type="checkbox" label="Private" />
                    </Form.Group>
                </Col>
                <Col>
                    <p>Priority:</p>
                    <Form.Group controlId="formBasicCheckbox3">
                        <Form.Check type="checkbox" label="Low" />
                        <Form.Check type="checkbox" label="Medium" />
                        <Form.Check type="checkbox" label="High" />
                    </Form.Group>
                </Col>
                <Col>
                    <Button variant="primary" type="submit">
                        Filter
                    </Button>
                </Col>
            </Row>
        </Form>
        
        <ListTicketItem title="Help with Issue" description="This is some descriptive text about the issue" status="In Progress" visibility="Public" priority="High" requestor="ABC Tech" supporter="Callum Dennis" />
        <ListTicketItem title="Help with Issue" description="This is some descriptive text about the issue" status="In Progress" visibility="Public" priority="High" requestor="ABC Tech" supporter="Callum Dennis" />
        <ListTicketItem title="Help with Issue" description="This is some descriptive text about the issue" status="In Progress" visibility="Public" priority="High" requestor="ABC Tech" supporter="Callum Dennis" />
        <ListTicketItem title="Help with Issue" description="This is some descriptive text about the issue" status="In Progress" visibility="Public" priority="High" requestor="ABC Tech" supporter="Callum Dennis" />
    </div>
  )
}

export default ListTickets