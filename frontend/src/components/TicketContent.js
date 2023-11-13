// React import
import React from 'react';

// Network based imports
import { useHistory } from "react-router";
import { useCurrentUser } from '../contexts/CurrentUserContexts';
import { axiosRes } from '../api/axiosDefaults';

// Package based imports
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// Custom component imports
import Sidebar from './Sidebar';
import { MoreDropdown } from './MoreDropdown';

const TicketContent = (props) => {
    const {
        id,
        owner,
        title,
        description,
        status,
        priority,
        created_at,
        updated_at,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

    // Change URL to edit ticket page
    const handleEdit = () => {
        history.push(`/tickets/${id}/edit`);
    };

    // Provide delete ticket handler
    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/tickets/${id}/`);
            history.goBack();
        } catch (err) {
            //console.log(err);
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