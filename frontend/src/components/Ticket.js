import React from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Comment from './Comment'
import Sidebar from './Sidebar'

const Ticket = (props) => {
  return (
    <div>
        <Container>
            <Card>
                <Card.Title>Support Ticket Title</Card.Title>
                <Row>
                    <Col><Button variant="primary">Assign</Button></Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                        <Card.Text>{props.description}</Card.Text>
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
        </Container>
    </div>
  )
}

export default Ticket