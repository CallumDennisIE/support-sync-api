import React, { useState } from 'react'

import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import { useHistory } from "react-router";
import { axiosReq } from "../api/axiosDefaults";


const CreateTicket = () => {

    const [errors, setErrors] = useState({});

    const history = useHistory();

    const [ticketData, setTicketData] = useState({
        title: "",
        description: "",
        priority: "",
      });
    const { title, description, priority } = ticketData;
    
    const handleChange = (event) => {
    setTicketData({
        ...ticketData,
        [event.target.name]: event.target.value,
    });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);
        //formData.append("priority", priority);

        try {
            const { data } = await axiosReq.post("/tickets/", formData);
            history.push(`/tickets/${data.id}`);
        } catch (err) {
            console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    return (
        <div>
            <Container>
                <Card>
                    <Card.Title>Create a Support Ticket</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Ticket Title:</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Help with abc.." 
                                name="title" 
                                value={title} 
                                onChange={handleChange} 
                            />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Priority:</Form.Label>
                            <Form.Control 
                                as="select" 
                                name="priority" 
                                value={priority}
                                onChange={handleChange}
                            >
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description:</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                placeholder="Hello Support, could you please help abc.." 
                                name="description" 
                                value={description} 
                                onChange={handleChange} 
                            />
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