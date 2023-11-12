import React from 'react';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Avatar from './Avatar';
import { useCurrentUser } from '../contexts/CurrentUserContexts';
import { MoreDropdown } from './MoreDropdown';
import { axiosRes } from '../api/axiosDefaults';

const Comment = (props) => {
    const { profile_id, profile_image, owner, updated_at, content,
        id, setTicket, setComments } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/comments/${id}/`);
            setTicket(prevTicket => ({
                results: [
                    {
                        ...prevTicket.results[0],
                        comments_count: prevTicket.results[0].comments_count - 1,
                    },
                ],
            }));

            setComments(prevComments => ({
                ...prevComments,
                results: prevComments.results.filter(comment => comment.id !== id),
            }));
        } catch (err) {
            console.log(err);
        }
    };

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
                                    {is_owner && (
                                        <MoreDropdown handleEdit={() => { }} handleDelete={handleDelete} />
                                    )}
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