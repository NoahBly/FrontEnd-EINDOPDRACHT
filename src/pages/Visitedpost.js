import React, {useContext, useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

import axios from "axios";

function Visitedpost() {
    const { post2Id } = useParams();

    const [visitedpost, setVisitedpost] = useState();

    const {visitedprofileid} = useContext(AuthContext);

    const {visitedpostidcurrent, setVisitedpostidfunction} = useContext(AuthContext);

    useEffect(() => {

        console.log(post2Id);
        console.log(visitedprofileid);


        if(!post2Id.isEmpty) {
            const postvisitedid = post2Id;
            setVisitedpostidfunction(post2Id);


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
        } }, []);



    //
    // const currentPost = postsofvisitedprofile.find((post) => {
    //     return post.id === post2Id;
    // });

    return (
        <>
            {visitedpost &&
            <article>
                <h1>{visitedpost.name}</h1>
                <img
                    alt="Afbeelding post"
                    src={visitedpost.imagevideo}
                />

                <Link to={`/commentvisitedprofile/create`}> <p>voeg comment toe!</p> </Link>

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
                <Link to={`/searchresultsprofiles/${visitedprofileid}`}> Back to Visited Profile! </Link>
            </article>
        </>
    );
}

export default Visitedpost;