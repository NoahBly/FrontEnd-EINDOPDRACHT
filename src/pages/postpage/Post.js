import React, {useContext, useState, useEffect} from 'react';
import {useParams, Link, NavLink} from 'react-router-dom';
import {AuthContext} from "../../context/authenticationcontext/AuthContext";
import axios from "axios";
import "../postpage/poststyle.css"
import {ProfileContext} from "../../context/profilecontext/ProfileContext";
import Comments from "../../context/components/componentcomments/CommentsComponent";
import CommentsComponent from "../../context/components/componentcomments/CommentsComponent";

function Post() {
    const { postId } = useParams();
    const [post,setPost] = useState();
    const {postsofprofile,setPostidfunction,profileidcurrent} = useContext(ProfileContext);

    console.log(postsofprofile);
    console.log(postId);

    const [graphicimageBlob, setGraphicimageBlob] = useState(null);
    const [graphicvideoBlob, setGraphicvideoBlob] = useState(null);
    const currenttoken = localStorage.getItem("token");

    useEffect(() => {

        if(!postId.isEmpty ) {
            const postid = postId;
            setPostidfunction(postId);


        async function fetchData(postid) {
            try {
                const {data} = await axios.get(`http://localhost:8083/posts/post/${postid}`,{
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${currenttoken}`, // is hetzelfde als 'Bearer ' + token,
                    }});
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
                        responseType: "blob",
                        headers: {
                            Authorization: `Bearer ${currenttoken}`, // is hetzelfde als 'Bearer ' + token,
                        }
                    });
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

            if (postid) {
                fetchData2(postid);
            }


    }}, []);


    // const currentPost = postsofprofile.find((post) => {
    //     return post.id === +postId;
    // });
    // console.log(currentPost);

    return (
        <section className="outer-container-2">
            <div className="inner-container-2">
        {post &&
        <>
            <article className="article-section-2">
                <NavLink to="/postsdelete/delete">
                    <p className="text-padding">delete post</p>
                </NavLink>

                <h1 className="text-padding">{post.name}</h1>
                {graphicimageBlob && <img
                alt="Afbeelding post"
                src={graphicimageBlob.src} className="image-post2"
               /> }
                {graphicvideoBlob && <video
                    width="750" height="500" controls >
                    <source src={graphicvideoBlob} type="video/mp4"/>
                </video>}
                <Link to={`/comment/create`}> <p>voeg comment toe!</p> </Link>
                <p><strong>Comments: </strong></p>
                {post.comments &&
                    <ul className="article-section-2">
                        {post.comments.map((comment) => {
                           console.log(comment);
                            return (

                                <CommentsComponent
                                comment={comment}
                                profilecurrent={profileidcurrent}
                                commentmaker={comment.commentmaker.id}
                                profileid={comment.post.profile.id}
                                key={`${comment.id}-${comment.name}`}
                                url1={`/commentdelete/delete/${comment.id}`}
                                >
                                    delete this comment
</CommentsComponent>

                            )
                        })}
                    </ul>
                }
            </article>

            </>
          }
            </div>

            <article className="article-section-2b">
            <Link to="/profile">Back to  Profile</Link>
        </article>

        </section>
    );
}

export default Post;