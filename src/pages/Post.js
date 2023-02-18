import React, {useContext, useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import axios from "axios";

function Post() {
    const { postId } = useParams();
    const [post,setPost] = useState();

    const {postsofprofile} = useContext(AuthContext);
    const {setPostidfunction} = useContext(AuthContext);
    console.log(postsofprofile);
    console.log(postId);

    setPostidfunction(postId);

    useEffect(() => {

        async function fetchData(postid) {
            try {
                const {data} = await axios.get(`http://localhost:8083/posts/post/${postid}`);
                console.log(data);
                setPost(data);
            } catch (e) {
                console.error(e);
            }
        }

        if (postId) {
            fetchData(postId);
        }
    }, []);


    // const currentPost = postsofprofile.find((post) => {
    //     return post.id === +postId;
    // });
    // console.log(currentPost);

    return (
        <section>
        {post &&
        <>
            <article>
                <h1>{post.name}</h1>
               <img
                alt="Afbeelding post"
                src={post.imagevideo}
               />
                <Link to={`/comment/create`}> <p>voeg comment toe!</p> </Link>
                <p><strong>Comments: </strong></p>
                {post.comments &&
                    <ul>
                        {post.comments.map((comment) => {
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