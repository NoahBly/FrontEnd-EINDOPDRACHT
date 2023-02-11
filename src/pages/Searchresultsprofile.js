import React, { useContext } from 'react';
import {AuthContext} from "../context/AuthContext";
import {Link, useParams} from "react-router-dom";

function Searchresultsprofile() {
    const {profile2Id} = useParams();
    const {profilesearchresults} = useContext(AuthContext);
    const {setVisitedprofilepostsfunction} = useContext(AuthContext);

    const currentprofile = {};
    if (profilesearchresults.length >= 0) {
        const currentprofile = profilesearchresults.find((profile) => {
            return profile.id === profile2Id;
        });
        setVisitedprofilepostsfunction(currentprofile.posts);
    }

    return (
        <section className="poke-card">
            <>
                <h2>{currentprofile.name}</h2>
                <img
                    alt="Afbeelding profile"
                    src={currentprofile.profileimage}
                />
                <p><strong>Friendlist: </strong>{currentprofile.friendlist.length}</p>
                <p><strong>Followerslist: </strong>{currentprofile.followerslist.length}</p>
                <p><strong>Followingslist: </strong>{currentprofile.followingslist.length}</p>
                <p><strong>Bio: </strong>{currentprofile.bioinformation}</p>
                <p><strong>Posts: </strong></p>
                <ul>
                    {currentprofile.posts.map((post) => {
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
            </>
            }
        </section>
    );
}

export default Searchresultsprofile;