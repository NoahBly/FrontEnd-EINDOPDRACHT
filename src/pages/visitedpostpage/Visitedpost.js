import React, {useContext, useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import {AuthContext} from "../../context/authenticationcontext/AuthContext";
import "../visitedpostpage/visiteedpoststyle.css"

import axios from "axios";

function Visitedpost() {
    const { post2Id } = useParams();

    const [visitedpost, setVisitedpost] = useState();

    const {visitedprofileid} = useContext(AuthContext);
    const {profileidcurrent} = useContext(AuthContext);

    const {visitedpostidcurrent, setVisitedpostidfunction} = useContext(AuthContext);

    const [imageBlob, setImageBlob] = useState();
    const [videoBlob,setVideoBlob] = useState();
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
                        setVideoBlob(objectURL);
                    }else {
                        const reader = new FileReader();
                        reader.onload= function(e) {
                            const image = new Image();

                            image.src = e.target.result;
                            setImageBlob(image);
                        }

                        // console.log(data);
                        // setImageBlob(data);
                        // const bloburl = URL.createObjectURL(data.blob);
                        // console.log(bloburl);
                        reader.readAsDataURL(blob);
                    }
                    console.log(imageBlob)
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
                {imageBlob && <img
                    alt="Afbeelding post"
                    src={imageBlob.src} className="image-post"
                /> }
                {videoBlob && <video
                    width="750" height="500" controls >
                    <source src={videoBlob} type="video/mp4"/>
                </video>}
                <Link to={`/commentvisitedprofile/create`}> <p>voeg comment toe!</p> </Link>

                <p><strong>Comments: </strong></p>
                {visitedpost.comments &&
                    <ul className="article-section-2">
                        {visitedpost.comments.map((comment) => {
                            return <li key={`${comment.id}-${comment.name}`}>
                                <p>{comment.commentmaker.name} -</p>   <p> {comment.comment}</p>
                                {comment.commentmaker.id === profileidcurrent || comment.post.profile.id === profileidcurrent ?
                                    <Link to={`/commentdelete/delete/${comment.id}`}>
                                        delete this comment
                                    </Link>: <p> </p>}

                            </li>
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