import React,{useContext} from 'react';
import { useParams, Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function Post() {
    const { postId } = useParams();

    const {postsofprofile} = useContext(AuthContext);

    console.log(postsofprofile);
    console.log(postId);




    const currentPost = postsofprofile.find((post) => {
        return post.id === +postId;
    });
    console.log(currentPost);

    return (
        <section>
        {currentPost &&
        <>
            <article>
                <h1>{currentPost.name}</h1>
               <img
                alt="Afbeelding post"
                src={currentPost.imagevideo}
               />
                <p>voeg comment toe!</p>
                <p><strong>Comments: </strong></p>
                {currentPost.comments &&
                    <ul>
                        {currentPost.comments.map((comment) => {
                            return (
                                <li key={`${comment.id}-${comment.name}`}>
                                    <p> {comment.comment}</p>
                                </li>
                            )
                        })}
                    </ul>
                }
            </article>
            <article>
                <Link to="/">Terug naar Home</Link>
            </article>
            </>
          }
        </section>
    );
}

export default Post;