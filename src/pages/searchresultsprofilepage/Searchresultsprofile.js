import React, {useContext, useState, useEffect} from 'react';
import {AuthContext} from "../../context/authenticationcontext/AuthContext";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import "../searchresultsprofilepage/searchresultsprofilestyle.css"
import {ProfileContext} from "../../context/profilecontext/ProfileContext";
import CommentsComponent from "../../context/components/componentcomments/CommentsComponent";

function Searchresultsprofile() {
    const {profile2Id} = useParams();
    const {profilesearchresults} = useContext(AuthContext);
    const {setVisitedprofilepostsfunction,setVisitedprofileidfunction} = useContext(ProfileContext);
    const [profilevisited, setProfilevisited] = useState();
    const [graphicimageBlob, setGraphicimageBlob] = useState();
    const [profiles, setProfiles] = useState([]);
    const {userDetails} = useContext(AuthContext);
    const [followers, setFollowers] = useState([]);
    const [followings, setFollowings] = useState([]);
    const [banaan, setBanaan] = useState(false);
    const [appel, setAppel] = useState(false);

    const token = localStorage.getItem("token");

    useEffect(() => {
        console.log(profile2Id);


        if (!profile2Id.isEmpty) {
            const profile2id = profile2Id;
            setVisitedprofileidfunction(profile2Id);

            async function fetchData() {
                try {
                    const {data} = await axios.get(`http://localhost:8083/profiles/${profile2id}`,
                        {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`, // is hetzelfde als 'Bearer ' + token,
                            }});
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
                    responseType: "blob",
                    headers: {
                            Authorization: `Bearer ${token}`, // is hetzelfde als 'Bearer ' + token,
                    }});
                const blob = response.data;
                const reader = new FileReader();
                reader.onload = function (e) {
                    const image = new Image();
                    image.src = e.target.result;
                    setGraphicimageBlob(image);
                }
                // console.log(data);
                // setImageBlob(data);
                // const bloburl = URL.createObjectURL(data.blob);
                // console.log(bloburl);
                reader.readAsDataURL(blob);
                console.log(graphicimageBlob)
                console.log(response);
                console.log(response.data);
            } catch (e) {
                console.error(e);
            }

        }

    useEffect(() => {
        console.log(userDetails.id);

        async function fetchData3() {

            try {
                const {data} = await axios.get(`http://localhost:8083/profiles/user/${userDetails.id}`,{
                    headers: {
                        "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`, // is hetzelfde als 'Bearer ' + token,
                    }});
                console.log(data);
                if(data) {
                    // setProfiles(data.friendlist)
                    setProfiles(data.friendlist.filter((profile) => {
                        if (profile.friend.name === profilevisited.name) {
                            setBanaan(true);
                            console.log("test");
                        }else {
                            setBanaan(false);
                        }


                    } ));
                       }


            } catch (e) {
                console.error(e);
            }
        }

            fetchData3();

    },[profilevisited]);



    useEffect(() => {

        async function fetchdata5() {
            // Verstuur de inloggegevens via een post-request naar de backend
            try {

                const response = await axios.get(`http://localhost:8083/followrequests/profile/${userDetails.profile.id}/followings`, {
                    headers: {
                        "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`, // is hetzelfde als 'Bearer ' + token,
                    }});
                // We krijgen een token terug:
                console.log(response.data);

                if(response.data) {
                    // setProfiles(data.friendlist)
                    setFollowings(response.data.filter((profile) => {
                        if (profile.friend.name === profilevisited.name) {
                            setAppel(true);
                            console.log("test");
                        }else {
                            setAppel(false);
                        }


                    } ));
                }
                // if(response.data) {
                // setFollowings(response.data);
                //setProfilesearchresults(response.data);
            // }
            } catch (e) {
                console.error(e);
            }
        }

        fetchdata5();

    },[profilevisited]);






    return (
            <div className="outer-container-2">
            <section className="inner-container-2">

                <div className="article-section-2">
                {profilevisited &&
                    <>
                        <h1 className="h1-intro">{profilevisited.name}</h1>
                        {graphicimageBlob && <img
                            alt="Afbeelding profile"
                            src={graphicimageBlob.src} className="image-post"
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

                                        <CommentsComponent
                                            post={post}
                                            key={`${post.id}-${post.name}`}
                                            classname ={"h1-intro"}
                                            url1={`/searchresultsposts/profile/${post.id}`}
                                        />





                                    )
                                })}
                            </ul>
                        }
                    </>
                }
            </div>
            </section>

                { banaan ? <p></p> : <div className="article-section-2">

                                 <Link to={`/createfriendrequest/create`}>
                                     <p className="p-intro"> Create Friendrequest!</p>
                                 </Link>
                             </div>
                }
            {/*    */}

                { console.log(followings)}
                {console.log(appel)}


                { appel ? <p></p> :  <div className="article-section-2">

                    <Link to={`/createfollowrequest/create`}>
                        <p className="p-intro">Create Followrequest</p>
                    </Link>

                </div>
                }



            </div>

                );
    }


export default Searchresultsprofile;