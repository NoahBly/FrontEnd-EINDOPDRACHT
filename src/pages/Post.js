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

    const [imageBlob, setImageBlob] = useState(null);
    const [videoBlob, setVideoBlob] = useState(null);


    useEffect(() => {

        if(!postId.isEmpty ) {
            const postid = postId;
            setPostidfunction(postId);


        async function fetchData(postid) {
            try {
                const {data} = await axios.get(`http://localhost:8083/posts/post/${postid}`);
                console.log(data);
                setPost(data);
            } catch (e) {
                console.error(e);
            }
        }

        if (postid) {
            fetchData(postid);
        }

            async function fetchData2(postid) {
                try {
                    const response = await axios.get(`http://localhost:8083/posts/downloadpostfile/${postid}`, {
                        responseType: "blob"
                    });
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

            if (postid) {
                fetchData2(postid);
            }


    }}, []);


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
                {imageBlob && <img
                alt="Afbeelding post"
                src={imageBlob.src}
               /> }
                {videoBlob && <video
                    width="750" height="500" controls >
                    <source src={videoBlob} type="video/mp4"/>
                </video>}
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