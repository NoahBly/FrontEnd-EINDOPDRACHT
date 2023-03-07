import React, {useContext, useState,useEffect} from 'react';
import { AuthContext } from '../context/authenticationcontext/AuthContext';
import axios from 'axios';
import {Link} from "react-router-dom";

function Getallfriends() {

    const [friends, setFriends] = useState([]);
    const {userDetails} = useContext(AuthContext);

    console.log(userDetails.profile.id);

    useEffect(() => {

        async function fetchdata() {
            // Verstuur de inloggegevens via een post-request naar de backend
            try {
                // 2. We moeten de keys 'email' en 'password' meesturen (normaliter komen die uit een formulier, maar voor nu gebruiken we ze even hardcoded
                const response = await axios.get(`http://localhost:8083/friendrequests/profile/${userDetails.profile.id}/friends`);
                // We krijgen een token terug:
                console.log(response.data);
                setFriends(response.data);
                //setProfilesearchresults(response.data);

            } catch (e) {
                console.error(e);
            }
        }

        fetchdata();

    },[]);


    return (
        <div>
            {console.log(friends)}

            <p><strong>Results: </strong></p>
            {friends.length > 0 && <ul>
                {friends.map((friend) => {
                    return (
                        <li key={`${friend.id}-${friend.friend.name}`}>

                              <p><strong> {friend.friend.name}</strong></p>

                            <Link to={`/friendlistremove/friend/${friend.id}`}>
                                remove {friend.friend.name} as friend
                            </Link>

                            {friend.friend.profileimage}
                        </li>
                    )
                })}
            </ul>
            }

        </div>
    );
}

export default Getallfriends;