import React, {useContext, useState,useEffect} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import {Link} from "react-router-dom";
import "../getallfollowingpage/getallfollowingpagestyle.css"

function Getallfollowings() {

    const [followings, setFollowings] = useState([]);
    const {userDetails} = useContext(AuthContext);

    console.log(userDetails);

    useEffect(() => {

        async function fetchdata() {
            // Verstuur de inloggegevens via een post-request naar de backend
            try {
                // 2. We moeten de keys 'email' en 'password' meesturen (normaliter komen die uit een formulier, maar voor nu gebruiken we ze even hardcoded
                const response = await axios.get(`http://localhost:8083/followrequests/profile/${userDetails.profile.id}/followings`);
                // We krijgen een token terug:
                console.log(response.data);
                setFollowings(response.data);
                //setProfilesearchresults(response.data);

            } catch (e) {
                console.error(e);
            }
        }

        fetchdata();

    },[]);


    return (
        <div className="outer-container-2">
            <div className="inner-container-2">
                <article className="article-section-2">
            {console.log(followings)}

            <p className="p-intro "><strong>Following: </strong></p>
            {followings.length > 0 && <ul className="article-section-2">
                {followings.map((following) => {
                    return (
                        <li key={`${following.id}-${following.friend.name}`}>

                            <p><strong> {following.friend.name}</strong></p>

                            <Link to={`/followingslistremove/following/${following.id}`}>
                                remove {following.friend.name} as friend
                            </Link>

                            {following.friend.profileimage}
                        </li>
                    )
                })}
            </ul>
            }
                </article>
        </div>
        </div>
    );
}

export default Getallfollowings;