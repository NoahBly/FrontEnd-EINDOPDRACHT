import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {useContext} from "@types/react";
import {AuthContext} from "../context/AuthContext";

function Visitedpost() {
    const { post2Id } = useParams();

    const {postsofvisitedprofile} = useContext(AuthContext);


    const currentPost = postsofvisitedprofile.find((post) => {
        return post.id === post2Id;
    });

    return (
        <>
            <article>
                <h1>{currentPost.name}</h1>
                <h3>{currentPost.imagevideo}</h3>
                <p>voeg comment toe!</p>
                <p><strong>Comments: </strong></p>
                <ul>
                    {currentPost.comments.map((comment) => {
                        return (
                            <li key={`${comment.id}-${comment.name}`}>
                                <p> {comment.comment}</p>
                            </li>
                        )
                    })}
                </ul>
            </article>
            <article>
                <Link to="/">Terug naar Home</Link>
            </article>
        </>
    );
}

export default Visitedpost;