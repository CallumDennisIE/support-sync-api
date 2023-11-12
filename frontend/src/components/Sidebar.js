import React from 'react';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const Sidebar = (props) => {


    let status = props.status.charAt(0).toUpperCase() + props.status.slice(1);
    const priority = props.priority.charAt(0).toUpperCase() + props.priority.slice(1);
    const requestor = props.requestor.charAt(0).toUpperCase() + props.requestor.slice(1);

    return (
        <div>
            <ListGroup>
                <ListGroup.Item>
                    <Row>
                        <Col>
                            <i className="fa-regular fa-circle-check"></i> Status:
                        </Col>
                        <Col>
                            <span className="btn btn-primary">{status}</span>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>
                            <i className="fa-solid fa-bullhorn"></i> Priority:
                        </Col>
                        <Col>
                            <span className="btn btn-primary">{priority}</span>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>
                            <i className="fa-regular fa-address-book"></i> Requestor:
                        </Col>
                        <Col>
                            <span className="btn btn-primary">{requestor}</span>
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