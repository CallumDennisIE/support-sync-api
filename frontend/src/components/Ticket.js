import React, { useEffect, useState } from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import TicketContent from "./TicketContent";
import { useParams } from 'react-router';
import { axiosReq } from '../api/axiosDefaults';
import { useCurrentUser } from '../contexts/CurrentUserContexts';
import CommentCreateForm from "./CreateComment";
import Comment from './Comment';
import InfiniteScroll from 'react-infinite-scroll-component';
import Asset from './Asset';
import { fetchMoreData } from "../utils/utils";

const Ticket = () => {

    const { id } = useParams();
    const [ticket, setTicket] = useState({ results: [] });

    const currentUser = useCurrentUser();
    const profile_image = currentUser?.profile_image;
    const [comments, setComments] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: ticket }, { data: comments }] = await Promise.all([
                    axiosReq.get(`/tickets/${id}`),
                    axiosReq.get(`/comments/?ticket=${id}`)
                ]);
                setTicket({ results: [ticket] });
                setComments(comments);
            } catch (err) {
                console.log(err);
            }
        };
        handleMount();
    }, [id]);

    return (
        <div>
            <Container>
                <TicketContent {...ticket.results[0]} setTickets={setTicket} ticket />
                {currentUser ? (
                    <CommentCreateForm
                        profile_id={currentUser.profile_id}
                        profileImage={profile_image}
                        ticket={id}
                        setTicket={setTicket}
                        setComments={setComments}
                    />
                ) : comments.results.length ? (
                    "Comments"
                ) : null}
                {comments.results.length ? (
                    <InfiniteScroll
                        children={comments.results.map((comment) => (
                            <Comment
                                key={comment.id}
                                {...comment}
                                setTicket={setTicket}
                                setComments={setComments}
                            />
                        ))}
                        dataLength={comments.results.length}
                        loader={<Asset spinner />}
                        hasMore={!!comments.next}
                        next={() => fetchMoreData(comments, setComments)}
                    />
                ) : currentUser ? (
                    <span>No comments yet, be the first to comment</span>
                ) : (
                    <span>No comments...yet</span>
                )}
            </Container>
        </div >
    );
};

export default Ticket;