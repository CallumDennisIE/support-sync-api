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
                            <i className="fa-regular fa-circle-check"></i> Status:
                        </Col>
                        <Col>
                            <span className="btn btn-primary">{props.status}</span>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>
                            <i className="fa-solid fa-bullhorn"></i> Priority:
                        </Col>
                        <Col>
                            <span className="btn btn-primary">{props.priority}</span>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>
                            <i className="fa-regular fa-address-book"></i> Requestor:
                        </Col>
                        <Col>
                            <span className="btn btn-primary">{props.requestor}</span>
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