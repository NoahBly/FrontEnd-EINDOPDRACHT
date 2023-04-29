import React, {useContext, useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import {AuthContext} from "../../context/authenticationcontext/AuthContext";
import "../visitedpostpage/visiteedpoststyle.css"

import axios from "axios";
import {ProfileContext} from "../../context/profilecontext/ProfileContext";
import Comments from "../../context/components/componentcomments/CommentsComponent";

function Visitedpost() {
    const { post2Id } = useParams();

    const [visitedpost, setVisitedpost] = useState();

    const {visitedprofileid,profileidcurrent} = useContext(ProfileContext);


    const {visitedpostidcurrent, setVisitedpostidfunction} = useContext(AuthContext);

    const [graphicimageBlob, setGraphicimageBlob] = useState();
    const [graphicvideoBlob,setGraphicvideoBlob] = useState();
    const token = localStorage.getItem("token");
    useEffect(() => {

        console.log(post2Id);
        console.log(visitedprofileid);


        if(!post2Id.isEmpty) {
            const postvisitedid = post2Id;
            setVisitedpostidfunction(post2Id);


            async function fetchData(postvisitedid) {
                try {
                    const {data} = await axios.get(`http://localhost:8083/posts/post/${postvisitedid}`,{
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`, // is hetzelfde als 'Bearer ' + token,
                        }});
                    console.log(data);
                    setVisitedpost(data);

                    if (data.imagevideo !== null) {
                        fetchData2();
                    }


                } catch (e) {
                    console.error(e);
                }
            }

            if (postvisitedid) {
                fetchData(postvisitedid);
            }


        } }, []);




            const postvisitedid = post2Id;

            async function fetchData2() {
                try {
                    const response = await axios.get(`http://localhost:8083/posts/downloadpostfile/${postvisitedid}`, {
                        responseType: "blob",
                        headers: {
                                Authorization: `Bearer ${token}`, // is hetzelfde als 'Bearer ' + token,
                        }});
                    const blob = response.data;
                    console.log(blob);
                    if(blob.type === "video/mp4") {
                        const objectURL = URL.createObjectURL(blob);
                        setGraphicvideoBlob(objectURL);
                    }else {
                        const reader = new FileReader();
                        reader.onload= function(e) {
                            const image = new Image();

                            image.src = e.target.result;
                            setGraphicimageBlob(image);
                        }

                        // console.log(data);
                        // setImageBlob(data);
                        // const bloburl = URL.createObjectURL(data.blob);
                        // console.log(bloburl);
                        reader.readAsDataURL(blob);
                    }
                    console.log(graphicimageBlob)
                    console.log(response);
                    console.log(response.data);

                } catch (e) {
                    console.error(e);
                }
            }







    //
    // const currentPost = postsofvisitedprofile.find((post) => {
    //     return post.id === post2Id;
    // });

    return (
        <section className="outer-container-2">
        <div className="inner-container-2">
            {visitedpost &&
            <article className="article-section-2">
                <h1>{visitedpost.name}</h1>
                {graphicimageBlob && <img
                    alt="Afbeelding post"
                    src={graphicimageBlob.src} className="image-post"
                /> }
                {graphicvideoBlob && <video
                    width="750" height="500" controls >
                    <source src={graphicvideoBlob} type="video/mp4"/>
                </video>}
                <Link to={`/commentvisitedprofile/create`}> <p>voeg comment toe!</p> </Link>

                <p><strong>Comments: </strong></p>
                {visitedpost.comments &&
                    <ul className="article-section-2">
                        {visitedpost.comments.map((comment) => {
                            return (


                            <Comments
                                comment={comment}
                                profilecurrent={profileidcurrent}
                                profileid={comment.post.profile.id}
                                children={"delete this comment"}
                                key={`${comment.id}-${comment.name}`}
                            >
                                delete this comment
                            </Comments>


                            )
                        })}
                    </ul>
                }
            </article>
            }
        </div>

            <article>
            <Link to={`/searchresultsprofiles/${visitedprofileid}`}> Back to Visited Profile! </Link>
            </article>

        </section>
    );
}

export default Visitedpost;