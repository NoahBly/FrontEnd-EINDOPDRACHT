import React, {useContext, useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

import axios from "axios";

function Visitedpost() {
    const { post2Id } = useParams();
    const {postvisitedid, setPostvisitedid} = useState();
    const {visitedpost, setVisitedpost} = useState();


    useEffect(() => {

        console.log(post2Id);

        if(!post2Id.isEmpty) {
            setPostvisitedid(post2Id);



        async function fetchData(postvisitedid) {
            try {
                const {data} = await axios.get(`http://localhost:8083/posts/post/${postvisitedid}`);
                console.log(data);
                setVisitedpost(data);
            } catch (e) {
                console.error(e);
            }
        }

        if (postvisitedid) {
            fetchData(postvisitedid);
        }
    }}, []);



    //
    // const currentPost = postsofvisitedprofile.find((post) => {
    //     return post.id === post2Id;
    // });

    return (
        <>
            {visitedpost &&
            <article>
                <h1>{visitedpost.name}</h1>
                <h3>{visitedpost.imagevideo}</h3>
                <p>voeg comment toe!</p>
                <p><strong>Comments: </strong></p>

                {visitedpost.comments &&
                    <ul>
                        {visitedpost.comments.map((comment) => {
                            return (
                                <li key={`${comment.id}-${comment.name}`}>
                                    <p> {comment.comment}</p>
                                </li>
                            )
                        })}
                    </ul>
                }
            </article>
            }
            <article>
                <Link to="/">Terug naar Home</Link>
            </article>
        </>
    );
}

export default Visitedpost;