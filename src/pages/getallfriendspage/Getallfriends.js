import React, {useContext, useState,useEffect} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import {Link} from "react-router-dom";
import "../getallfriendspage/getallfriendsstyle.css"

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
        <div className="outer-container-2">
            <div className="inner-container-2">
                <article className="article-section-2">
            {console.log(friends)}

            <p className ="p-intro " ><strong>Friends: </strong></p>
            {friends.length > 0 && <ul className="article-section-2">
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
                </article>
        </div>
        </div>
    );
}

export default Getallfriends;