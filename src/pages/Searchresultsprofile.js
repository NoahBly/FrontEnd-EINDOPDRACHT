import React, {useContext, useState, useEffect} from 'react';
import {AuthContext} from "../context/AuthContext";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

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
            <section className="poke-card">
                {profilevisited &&
                    <>
                        <h2>{profilevisited.name}</h2>
                        {imageBlob && <img
                            alt="Afbeelding profile"
                            src={imageBlob.src} width="500px"
                        />}

                        <p><strong>Friendlist: </strong>{profilevisited.friendlist &&
                            <p>{profilevisited.friendlist.length}</p>}</p>
                        <p><strong>Followerslist: </strong>{profilevisited.followerslist &&
                            <p>{profilevisited.followerslist.length}</p>}</p>
                        <p><strong>Followingslist: </strong>{profilevisited.followingslist &&
                            <p>{profilevisited.followingslist.length}</p>}</p>

                        <Link to={`/createfriendrequest/create`}>
                            <p> Create Friendrequest!</p>
                        </Link>

                        <Link to={`/createfollowrequest/create`}>
                            <p>Create Followrequest</p>
                        </Link>

                        <p><strong>Bio: </strong>{profilevisited.bioinformation}</p>

                        <p><strong>Posts: </strong></p>
                        {profilevisited.posts &&
                            <ul>
                                {profilevisited.posts.map((post) => {
                                    return (
                                        <li key={`${post.id}-${post.name}`}>
                                            <Link to={`/searchresultsposts/profile/${post.id}`}>
                                                {post.name}
                                            </Link>
                                            <h2>{post.name}</h2>
                                        </li>
                                    )
                                })}
                            </ul>
                        }
                    </>
                }

            </section>
        );
    }


export default Searchresultsprofile;