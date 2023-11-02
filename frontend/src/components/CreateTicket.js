import React from 'react'
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"


const CreateTicket = () => {
  return (
    <div>
        <Container>
    	    <Card>
                <Card.Title>Create a Support Ticket</Card.Title>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Ticket Title:</Form.Label>
                        <Form.Control type="text" placeholder="Help with abc.." />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Priority:</Form.Label>
                        <Form.Control as="select">
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description:</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Hello Support, could you please help abc.." />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Create Ticket
                    </Button>
                </Form>
            </Card>
        </Container>
    </div>
  )
}

export default CreateTicket