import React, {useContext, useState,useEffect} from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import {Link} from "react-router-dom";

function Getallfollowings() {

    const [followings, setFollowings] = useState([]);
    const {profileidcurrent} = useContext(AuthContext);

    console.log(profileidcurrent);

    useEffect(() => {

        async function fetchdata() {
            // Verstuur de inloggegevens via een post-request naar de backend
            try {
                // 2. We moeten de keys 'email' en 'password' meesturen (normaliter komen die uit een formulier, maar voor nu gebruiken we ze even hardcoded
                const response = await axios.get(`http://localhost:8083/followrequests/profile/${profileidcurrent}/followings`);
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
        <div>
            {console.log(followings)}

            <p><strong>Results: </strong></p>
            {followings.length > 0 && <ul>
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

        </div>
    );
}

export default Getallfollowings;