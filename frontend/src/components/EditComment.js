// React imports
import React, { useState } from "react";

// Network based import
import { axiosRes } from "../api/axiosDefaults";

// Custom component import
import Form from "react-bootstrap/Form";

function CommentEditForm(props) {
    const { id, content, setShowEditForm, setComments } = props;

    const [formContent, setFormContent] = useState(content);

    // Provide input change handler
    const handleChange = (event) => {
        setFormContent(event.target.value);
    };

    // Provide submit edited comment handler
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axiosRes.put(`/comments/${id}/`, {
                content: formContent.trim(),
            });
            setComments((prevComments) => ({
                ...prevComments,
                results: prevComments.results.map((comment) => {
                    return comment.id === id
                        ? {
                            ...comment,
                            content: formContent.trim(),
                            updated_at: "now",
                        }
                        : comment;
                }),
            }));
            setShowEditForm(false);
        } catch (err) {
            //console.log(err);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="pr-1">
                <Form.Control
                    as="textarea"
                    value={formContent}
                    onChange={handleChange}
                    rows={2}
                />
            </Form.Group>
            <div className="text-right">
                <button
                    onClick={() => setShowEditForm(false)}
                    type="button"
                >
                    Cancel
                </button>
                <button
                    disabled={!content.trim()}
                    type="submit"
                >
                    Save Comment
                </button>
            </div>
        </Form>
    );
}

export default CommentEditForm;