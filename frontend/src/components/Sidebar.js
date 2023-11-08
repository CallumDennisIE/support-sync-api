import React from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Dropdown from "react-bootstrap/Dropdown"
import ListGroup from "react-bootstrap/ListGroup"
import Button from "react-bootstrap/Button"

const Sidebar = (props) => {
  return (
    <div>
        <ListGroup>
            <ListGroup.Item>
                <Row>
                    <Col>
                        <i class="fa-regular fa-circle-check"></i>
                    </Col>
                    <Col>
                        <p>Status</p>
                    </Col>
                    <Col>
                    {props.is_supporter ? (
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
                        ) : (<Button variant="success">{props.status}</Button>)}
                        
                    </Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row>
                    <Col>
                        <i class="fa-regular fa-eye"></i>
                    </Col>
                    <Col>Visibility:</Col>
                    <Col>
                        {props.is_owner || props.is_supporter ? (
                            <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {props.visibility}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Public</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Private</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        ) : (<Button variant="success">{props.visibility}</Button>)}
                        
                    </Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row>
                    <Col><i class="fa-solid fa-bullhorn"></i></Col>
                    <Col>Priority:</Col>
                    <Col>
                    {props.is_supporter ? (
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
                    ) : (<Button variant="success">{props.priority}</Button>)}
                        
                    </Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row>
                    <Col><i class="fa-regular fa-address-book"></i></Col>
                    <Col>Requestor:</Col>
                    <Col><Button variant="success">{props.requestor}</Button></Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row>
                    <Col><i class="fa-regular fa-user"></i></Col>
                    <Col>Supporter:</Col>
                    <Col><Button variant="success">Callum Dennis</Button></Col>
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
  )
}

export default Sidebar