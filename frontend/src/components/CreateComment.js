import React, { useState } from "react";

import { Link } from "react-router-dom";
import { axiosRes } from "../api/axiosDefaults";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import Avatar from "./Avatar";


function CreateComment(props) {
    const { ticket, setTicket, setComments, profileImage, profile_id } = props;
    const [content, setContent] = useState("");

    const handleChange = (event) => {
        setContent(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axiosRes.post("/comments/", {
                content,
                ticket,
            });
            setComments((prevComments) => ({
                ...prevComments,
                results: [data, ...prevComments.results],
            }));
            setTicket((prevTicket) => ({
                results: [
                    {
                        ...prevTicket.results[0],
                        comments_count: prevTicket.results[0].comments_count + 1,
                    },
                ],
            }));
            setContent("");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Form className="mt-2" onSubmit={handleSubmit}>
            <Form.Group>
                <InputGroup>
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profileImage} />
                    </Link>
                    <Form.Control
                        placeholder="my comment..."
                        as="textarea"
                        value={content}
                        onChange={handleChange}
                        rows={2}
                    />
                </InputGroup>
            </Form.Group>
            <button
                className={`btn d-block ml-auto`}
                disabled={!content.trim()}
                type="submit"
            >
                Create Comment
            </button>
        </Form>
    );
}

export default CreateComment;