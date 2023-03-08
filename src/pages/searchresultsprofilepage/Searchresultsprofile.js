import React, {useContext, useState, useEffect} from 'react';
import {AuthContext} from "../../context/authenticationcontext/AuthContext";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import "../searchresultsprofilepage/searchresultsprofilestyle.css"

function Searchresultsprofile() {
    const {profile2Id} = useParams();
    const {profilesearchresults} = useContext(AuthContext);
    const {setVisitedprofilepostsfunction} = useContext(AuthContext);
    const [profilevisited, setProfilevisited] = useState();
    //const {profile2id, setprofile2id} = useState();
    const {visitedprofileid, setVisitedprofileidfunction} = useContext(AuthContext);
    const [imageBlob, setImageBlob] = useState();


    useEffect(() => {
        console.log(profile2Id);


        if (!profile2Id.isEmpty) {
            const profile2id = profile2Id;
            setVisitedprofileidfunction(profile2Id);

            async function fetchData() {
                try {
                    const {data} = await axios.get(`http://localhost:8083/profiles/${profile2id}`);
                    console.log(data);
                    setProfilevisited(data);
                    setVisitedprofilepostsfunction(data.posts);

                    if (data.profileimage !== null) {
                        fetchData2();
                    }


                    // setProfileidfunction(data.id);
                } catch (e) {
                    console.error(e);
                }
            }

            if (profile2id) {
                fetchData();
            }
        }
    }, []);



        const profilevisitedid = profile2Id;

        console.log(profilevisited);
        async function fetchData2() {

            try {
                const response = await axios.get(`http://localhost:8083/profiles/download/${profilevisitedid}`, {
                    responseType: "blob"
                });
                const blob = response.data;
                const reader = new FileReader();
                reader.onload = function (e) {
                    const image = new Image();
                    image.src = e.target.result;
                    setImageBlob(image);
                }
                // console.log(data);
                // setImageBlob(data);
                // const bloburl = URL.createObjectURL(data.blob);
                // console.log(bloburl);
                reader.readAsDataURL(blob);
                console.log(imageBlob)
                console.log(response);
                console.log(response.data);
            } catch (e) {
                console.error(e);
            }



        }


        return (
            <div className="outer-container-2">
            <section className="inner-container-2">

                <div className="article-section-2">
                {profilevisited &&
                    <>
                        <h1 className="h1-intro">{profilevisited.name}</h1>
                        {imageBlob && <img
                            alt="Afbeelding profile"
                            src={imageBlob.src} width="500px"
                        />}

                        <p className="p-intro"><strong>Friendlist: </strong>{profilevisited.friendlist &&
                            <p className="p-intro">{profilevisited.friendlist.length}</p>}</p>
                        <p className="p-intro"><strong>Followerslist: </strong>{profilevisited.followerslist &&
                            <p>{profilevisited.followerslist.length}</p>}</p>
                        <p className="p-intro"><strong>Followingslist: </strong>{profilevisited.followinglist &&
                            <p>{profilevisited.followinglist.length}</p>}</p>


                        <h1 className="h1-intro"><strong>Bio: </strong>{profilevisited.bioinformation}</h1>

                        <p><strong>Posts: </strong></p>
                        {profilevisited.posts &&
                            <ul className= "article-section-2 ">
                                {profilevisited.posts.map((post) => {
                                    return (
                                        <li key={`${post.id}-${post.name}`}>
                                            <Link to={`/searchresultsposts/profile/${post.id}`}>
                                                <h2>{post.name}</h2>
                                            </Link>

                                        </li>
                                    )
                                })}
                            </ul>
                        }
                    </>
                }
            </div>
            </section>
                <div className="article-section-2">
                <Link to={`/createfriendrequest/create`}>
                    <p className="p-intro"> Create Friendrequest!</p>
                </Link>

                <Link to={`/createfollowrequest/create`}>
                    <p className="p-intro">Create Followrequest</p>
                </Link>
                </div>
            </div>
        );
    }


export default Searchresultsprofile;