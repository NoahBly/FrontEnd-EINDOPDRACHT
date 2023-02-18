import React, { useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {AuthContext} from "../context/AuthContext";
import {Link} from "react-router-dom";

function Profile() {
    const [profile, setProfile] = useState({});
    const {setProfilepostsfunction} = useContext(AuthContext);
    const {userDetails} = useContext(AuthContext);
    const {setProfileidfunction} = useContext(AuthContext);

    useEffect(() => {
        console.log(userDetails.id);


        async function fetchData(userid) {
            try {
                const {data} = await axios.get(`http://localhost:8083/profiles/user/${userid}`);
                console.log(data);
                setProfile(data);
                setProfilepostsfunction(data.posts);
                setProfileidfunction(data.id);
            } catch (e) {
                console.error(e);
            }
        }

        if (userDetails.id) {
            fetchData(userDetails.id);
        }
    }, []);


    return (

        <section className="poke-card">
            {profile &&
            <>
                <h2>{profile.name}</h2>
                <img
                    alt="Afbeelding profile"
                    src={profile.profileimage}
                />
                <p><strong>Friendlist: </strong>{profile.friendlist && <p>{profile.friendlist.length}</p>}</p>
                <p><strong>Followerslist: </strong>{profile.followerslist && <p>{profile.followerslist.length}</p>}</p>
                <p><strong>Followingslist: </strong>{profile.followinglist && <p>{profile.followinglist.length}</p>}</p>
                <p><strong>Bio: </strong>{profile.bioinformation}</p>
               <Link to={`/post/create`}> <p>create post!</p></Link>
                <p><strong>Posts: </strong></p>
                {profile.posts &&
                    <ul>
                        {profile.posts.map((post) => {
                            return (
                                <li key={`${post.id}-${post.name}`}>
                                    <Link to={`/post/${post.id}`}>
                                       <p> {post.name} </p>
                                    </Link>
                                    <p>{post.name}</p>
                                  <img
                                    alt="Afbeelding post"
                                    src={post.imagevideo}
                                />
                        </li>
                            )
                        })}
                    </ul>
                }

            </>
            }
        </section>
    )
    ;
}
export default Profile;
