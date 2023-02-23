import React, {useContext, useState,useEffect} from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import {Link} from "react-router-dom";

function Getallfollowers() {

    const [followers, setFollowers] = useState([]);
    const {profileidcurrent} = useContext(AuthContext);

    console.log(profileidcurrent);

    useEffect(() => {

        async function fetchdata() {
            // Verstuur de inloggegevens via een post-request naar de backend
            try {
                // 2. We moeten de keys 'email' en 'password' meesturen (normaliter komen die uit een formulier, maar voor nu gebruiken we ze even hardcoded
                const response = await axios.get(`http://localhost:8083/followrequests/profile/${profileidcurrent}/followers`);
                // We krijgen een token terug:
                console.log(response.data);
                setFollowers(response.data);
                //setProfilesearchresults(response.data);

            } catch (e) {
                console.error(e);
            }
        }

        fetchdata();

    },[]);


    return (
        <div>
            {console.log(followers)}

            <p><strong>Results: </strong></p>
            {followers.length > 0 && <ul>
                {followers.map((follower) => {
                    return (
                        <li key={`${follower.id}-${follower.friend.name}`}>

                            <p><strong> {follower.friend.name}</strong></p>

                            <Link to={`/followerslistremove/follower/${follower.id}`}>
                                remove {follower.friend.name} as friend
                            </Link>

                            {follower.friend.profileimage}
                        </li>
                    )
                })}
            </ul>
            }

        </div>
    );
}

export default Getallfollowers;