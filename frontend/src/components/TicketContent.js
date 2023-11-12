import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import Sidebar from './Sidebar';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useCurrentUser } from '../contexts/CurrentUserContexts';
import { useHistory } from "react-router";
import { MoreDropdown } from './MoreDropdown';
import { axiosRes } from '../api/axiosDefaults';

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
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/tickets/${id}/edit`);
    };

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/tickets/${id}/`);
            history.goBack();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <Card>
                <Card.Title>{title}</Card.Title>
                <Row>
                    <Col>
                        <Button variant="primary" onClick={() => history.goBack()}>
                            Back
                        </Button>
                    </Col>
                    <Col>
                        {is_owner && (
                            <MoreDropdown
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}
                            />
                        )}
                    </Col>
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
                                priority={priority}
                                requestor={owner}
                                created_at={created_at}
                                updated_at={updated_at}
                                is_owner={is_owner}
                            />
                        </div>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default TicketContent;