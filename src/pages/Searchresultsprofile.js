import React, {useContext, useState, useEffect} from 'react';
import {AuthContext} from "../context/AuthContext";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

function Searchresultsprofile() {
    const {profile2Id} = useParams();
    const {profilesearchresults} = useContext(AuthContext);
    const {setVisitedprofilepostsfunction} = useContext(AuthContext);
    const {profilevisited, setProfilevisited} = useState();

    useEffect(() => {
        console.log(profile2Id);


        if(!profile2Id.isEmpty() ) {
            const profile2id2 = profile2Id;


            async function fetchData(profile2id2) {
                try {
                    const {data} = await axios.get(`http://localhost:8083/profiles/user/${profile2id2}`);
                    console.log(data);
                    setProfilevisited(data);
                    setVisitedprofilepostsfunction(data.posts);
                    // setProfileidfunction(data.id);
                } catch (e) {
                    console.error(e);
                }
            }

            if (profile2id2) {
                fetchData(profile2id2);
            }
        }  }, []);



    return (
        <section className="poke-card">
            {profilevisited &&
            <>
                <h2>{profilevisited.name}</h2>
                <img
                    alt="Afbeelding profile"
                    src={profilevisited.profileimage}
                />
                <p><strong>Friendlist: </strong>{profilevisited.friendlist && <p>{profilevisited.friendlist.length}</p>}</p>
                <p><strong>Followerslist: </strong>{profilevisited.followerslist && <p>{profilevisited.followerslist.length}</p>}</p>
                <p><strong>Followingslist: </strong>{profilevisited.followingslist && <p>{profilevisited.followingslist.length}</p>}</p>
                <p><strong>Bio: </strong>{profilevisited.bioinformation}</p>
                <p><strong>Posts: </strong></p>
                {profilevisited.posts &&
                <ul>
                    {profilevisited.posts.map((post) => {
                        return (
                            <li key={`${post.id}-${post.name}`}>
                                <Link to={`/searchresults/profile/${post.id}`}>
                                    {post.title}
                                </Link>
                                {post.name}
                                {post.imagevideo}
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