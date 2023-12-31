// React imports
import React, { useState } from "react";

// Network based imports
import { axiosRes } from '../api/axiosDefaults';
import { useCurrentUser } from '../contexts/CurrentUserContexts';

// Package based imports
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Custom component imports
import Avatar from './Avatar';
import { MoreDropdown } from './MoreDropdown';
import EditComment from './EditComment';

const Comment = (props) => {
    const { profile_id, profile_image, owner, updated_at, content,
        id, setTicket, setComments } = props;

    const [showEditForm, setShowEditForm] = useState(false);

    // Set current user code
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    // Provide delete comment handler
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
            //console.log(err);
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
                                    <Card.Body>{showEditForm ? (
                                        <EditComment
                                            id={id}
                                            profile_id={profile_id}
                                            content={content}
                                            profileImage={profile_image}
                                            setComments={setComments}
                                            setShowEditForm={setShowEditForm}
                                        />
                                    ) : (
                                        <p>{content}</p>
                                    )}</Card.Body>
                                </Col>
                                <Col>
                                    {is_owner && !showEditForm && (
                                        <MoreDropdown handleEdit={() => setShowEditForm(true)} handleDelete={handleDelete} />
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