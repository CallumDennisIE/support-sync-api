import React from 'react';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Avatar from './Avatar';

const Comment = (props) => {
    const { profile_id, profile_image, owner, updated_at, content } = props;
    return (
        <div>
            <Card>
                <Row>
                    <Col>
                        <Card>
                            <Row>
                                <Col>
                                    <Avatar src={profile_image} />
                                </Col>
                                <Col>
                                    <p>{owner}</p>
                                    <p>{updated_at}</p>
                                </Col>
                                <Col>
                                    <Card.Body>{content}</Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default Comment;