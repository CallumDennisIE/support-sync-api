import React from 'react';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const Sidebar = (props) => {
    return (
        <div>
            <ListGroup>
                <ListGroup.Item>
                    <Row>
                        <Col>
                            <i className="fa-regular fa-circle-check"></i>
                        </Col>
                        <Col>
                            <p>Status</p>
                        </Col>
                        <Col>
                            <span className="badge badge-primary">{props.status}</span>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col><i className="fa-solid fa-bullhorn"></i></Col>
                        <Col>Priority:</Col>
                        <Col>
                            <span className="badge badge-primary">{props.priority}</span>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col><i className="fa-regular fa-address-book"></i></Col>
                        <Col>Requestor:</Col>
                        <Col>
                            <span className="badge badge-primary">{props.requestor}</span>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>Created At {props.created_at}</Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>Updated At {props.updated_at}</Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default Sidebar;