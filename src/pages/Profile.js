import React, { useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {AuthContext} from "../context/AuthContext";
import {Link} from "react-router-dom";

function Profile() {
    const [profile, setProfile] = useState({});
    const { setProfilepostsfunction } = useContext(AuthContext);
    const{userDetails} = useContext(AuthContext);

   useEffect(() => {
        console.log(userDetails.id);


        async function fetchData(userid) {
            try {
                const { data } = await axios.get(`http://localhost:8083/profiles/user/${userid}`);
                console.log(data);
                setProfile(data);
                setProfilepostsfunction(data.posts);
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

                <>
                    <h2>{profile.name}</h2>
                    <img
                        alt="Afbeelding profile"
                        src={profile.profileimage}
                    />
                    <p><strong>Friendlist: </strong>{profile.friendlist.length}</p>
                    <p><strong>Followerslist: </strong>{profile.followerslist.length}</p>
                    <p><strong>Followingslist: </strong>{profile.followinglist.length}</p>
                    <p><strong>Bio: </strong>{profile.bioinformation}</p>
                    <p><strong>Posts: </strong></p>
                    {/*<ul>*/}
                    {/*    {profile.posts.map((post) => {*/}
                    {/*        return (*/}
                    {/*            <li key={`${post.id}-${post.name}`}>*/}
                    {/*                <Link to={`/profile/post/${post.id}`}>*/}
                    {/*                    {post.title}*/}
                    {/*                </Link>*/}
                    {/*                {post.name}*/}
                    {/*                {post.imagevideo}*/}
                    {/*            </li>*/}
                    {/*        )*/}
                    {/*    })}*/}
                    {/*</ul>*/}
                </>

        </section>
    );
}

export default Profile;
