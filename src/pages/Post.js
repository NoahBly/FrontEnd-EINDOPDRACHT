import React,{useContext} from 'react';
import { useParams, Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function Post() {
    const { postId } = useParams();

    const {postsofprofile} = useContext(AuthContext);


    const currentPost = postsofprofile.find((post) => {
        return post.id === postId;
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

export default Post;