import React, {useContext, useState, useEffect} from 'react';
import {AuthContext} from "../../context/authenticationcontext/AuthContext";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import "../searchresultsprofilepage/searchresultsprofilestyle.css"

function Searchresultsprofile() {
    const {profile2Id} = useParams();
    const {profilesearchresults} = useContext(AuthContext);
    const {setVisitedprofilepostsfunction,currenttoken} = useContext(AuthContext);
    const [profilevisited, setProfilevisited] = useState();
    //const {profile2id, setprofile2id} = useState();
    const {visitedprofileid, setVisitedprofileidfunction} = useContext(AuthContext);
    const [imageBlob, setImageBlob] = useState();
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
                // 2. We moeten de keys 'email' en 'password' meesturen (normaliter komen die uit een formulier, maar voor nu gebruiken we ze even hardcoded
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
                        {imageBlob && <img
                            alt="Afbeelding profile"
                            src={imageBlob.src} className="image-post"
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
              {/*//  data.friendlist.find((profile) =>*/}
              {/*  //     profile.friend.name === profilevisited.name*/}
                { console.log(profiles)}
                {console.log(banaan)}
                {/*{ console.log(profilevisited)}*/}
                {/*{profiles &&*/}
                {/*{  profiles.find((profile) => {*/}
                {/*   // setBanaan( profile.friend.name === profilevisited.name);*/}
                {/*    // console.log(output);*/}

                {/*    //*/}
                {/*    // if(output) {*/}
                {/*    //      setBanaan(true);*/}
                {/*    // } else {*/}
                {/*    //     setBanaan(false);*/}
                {/*    // }*/}

                {/*    // else {*/}
                {/*    //    return  (   <div className="article-section-2">*/}
                {/*    //*/}
                {/*    //         <Link to={`/createfriendrequest/create`}>*/}
                {/*    //             <p className="p-intro"> Create Friendrequest!</p>*/}
                {/*    //         </Link>*/}
                {/*    //     </div>)*/}
                {/*    // }*/}

                {/*})}*/}

                {/*{*/}
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

            {/*//         return (*/}
            {/*//         <p></p>*/}
            {/*//         )*/}
            {/*//     }else {*/}
            {/*//         return (*/}
            {/*//             <div className="article-section-2">*/}
            {/*//*/}
            {/*//                 <Link to={`/createfriendrequest/create`}>*/}
            {/*//                     <p className="p-intro"> Create Friendrequest!</p>*/}
            {/*//                 </Link>*/}
            {/*//             </div>*/}
            {/*//*/}
            {/*//         )*/}
            {/*//     }*/}
            {/*// })*/}
            {/*//         : <p>test</p>*/}
            {/*//*/}
            {/*//     }*/}

            {/*    { console.log(followings)}*/}
            {/*    {followings > 0 ?*/}
            {/*        followings.map((following) => {*/}
            {/*            console.log(following);*/}
            {/*            if(profilevisited.id === following.friend.id) {*/}
            {/*                return (*/}
            {/*                    <p></p>*/}
            {/*                )*/}
            {/*            }else {*/}
            {/*                return (*/}
            {/*                    <div className="article-section-2">*/}

            {/*                        <Link to={`/createfollowrequest/create`}>*/}
            {/*                            <p className="p-intro">Create Followrequest</p>*/}
            {/*                        </Link>*/}

            {/*                    </div>*/}
            {/*                )*/}
            {/*            }*/}
            {/*        })*/}
            {/*        : <div className="article-section-2">*/}

            {/*            <Link to={`/createfollowrequest/create`}>*/}
            {/*                <p className="p-intro">Create Followrequest</p>*/}
            {/*            </Link>*/}

            {/*        </div>*/}
            {/*    }*/}


            </div>

                );
    }


export default Searchresultsprofile;