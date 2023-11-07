import React from 'react'
import Card from "react-bootstrap/Card"
import Comment from './Comment'
import Sidebar from './Sidebar'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import { useCurrentUser } from '../contexts/CurrentUserContexts'

const TicketContent = (props) => {
    const {
        id, 
        owner,
        ticket_id,
        title,
        description, 
        status,
        visibility,
        priority
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner

    return (
        <Card>
            <Card.Title>Support Ticket Title</Card.Title>
            <Row>
                <Col><Button variant="primary">Assign</Button></Col>
            </Row>
            <Row>
                <Col>
                    <div>
                    <Card.Text>Hello {owner}</Card.Text>
                    </div>
                </Col>
                <Col>
                    <div>
                        <Sidebar />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>
                        <h3>Comments</h3>
                        <Row>
                            <Col>
                                <Comment user="Callum Dennis" role="Supporter" comment="this is callums comment"/>
                                <Comment user="ABC Tech" role="Requestor" comment="this is ABC Tech's comment"/>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Card>
    )
}

export default TicketContent