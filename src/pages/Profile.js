import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pokemon.css';

function Profile({ endpoint }) {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        console.log(endpoint);

        async function fetchData() {
            try {
                const { data } = await axios.get(endpoint);
                setProfile(data);
            } catch (e) {
                console.error(e);
            }
        }

        if (endpoint) {
            fetchData();
        }
    }, [endpoint]);


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
                    <p><strong>Followingslist: </strong>{profile.followingslist.length}</p>
                    <p><strong>Bio: </strong>{profile.bioinformation}</p>
                    <p><strong>Posts: </strong></p>
                    <ul>
                        {profile.posts.map((post) => {
                            return (
                                <li key={`${post.id}-${post.name}`}>
                                    {post.name}
                                    {post.imagevideo}
                                </li>
                            )
                        })}
                    </ul>
                </>
            }
        </section>
    );
}

export default Profile;
