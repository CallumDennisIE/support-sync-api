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
        priority,
        created_at,
        updated_at,
        ticket
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner

    return (
        <div>
            {(is_owner || visibility === 'public') ? (
                <Card>
            
                <Card.Title>{title}</Card.Title>
                <Row>
                    <Col><Button variant="primary">Assign</Button></Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                        <Card.Text>{description}</Card.Text>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Sidebar 
                                status={status} 
                                visibility={visibility} 
                                priority={priority} 
                                requestor={owner} 
                                created_at={created_at} 
                                updated_at={updated_at}
                                is_supporter={false}
                                is_owner={is_owner}
                            />
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
            ) : (<div>Sorry can't view as not public / owner</div>)}
        </div>
    )
}

export default TicketContent