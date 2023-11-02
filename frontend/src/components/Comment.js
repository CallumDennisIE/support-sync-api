import React from 'react'
import Image from "react-bootstrap/Image"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Comment = (props) => {
  return (
    <div>
        <Card>
            <Row>
                <Col>
                    <Card>
                        <Row>
                            <Col>
                                <Image className="w-25" src="https://res.cloudinary.com/ddsq9twbk/image/upload/v1696754822/default_profile_yrspup.jpg" roundedCircle />
                                <p>{props.user}</p>
                                <p>{props.role}</p>
                            </Col>
                            <Col>
                                <Card.Body>{props.comment}</Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Card>
    </div>
  )
}

export default Comment