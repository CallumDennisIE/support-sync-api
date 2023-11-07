import React from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Dropdown from "react-bootstrap/Dropdown"
import ListGroup from "react-bootstrap/ListGroup"

const Sidebar = (props) => {
  return (
    <div>
        <ListGroup>
            <ListGroup.Item>
                <Row>
                    <Col>
                        <p>Status</p>
                    </Col>
                    <Col>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {props.status}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">New Request</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">In Progress</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Completed</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row>
                    <Col>Visibility:</Col>
                    <Col>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {props.visibility}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Public</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Private</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row>
                    <Col>Priority:</Col>
                    <Col>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {props.priority}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Low</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Medium</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">High</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row>
                    <Col>Requestor:</Col>
                    <Col>{props.requestor}</Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row>
                    <Col>Supporter:</Col>
                    <Col>Callum Dennis</Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row>
                    <Col>Created At:</Col>
                    <Col>{props.created_at}</Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row>
                    <Col>Updated At:</Col>
                    <Col>{props.updated_at}</Col>
                </Row>
            </ListGroup.Item>
        </ListGroup>
    </div>
  )
}

export default Sidebar