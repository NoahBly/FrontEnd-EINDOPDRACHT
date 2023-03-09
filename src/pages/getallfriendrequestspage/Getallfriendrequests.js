import React, {useContext, useState,useEffect} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import {Link} from "react-router-dom";
import "../getallfriendrequestspage/getallfriendrequestsstyle.css"

function Getallfriendrequests() {

    const [friendrequests, setFriendrequests] = useState([]);
    const {userDetails} = useContext(AuthContext);

    console.log(userDetails.profile.id);

    useEffect(() => {

        async function fetchdata() {
            // Verstuur de inloggegevens via een post-request naar de backend
            try {
                // 2. We moeten de keys 'email' en 'password' meesturen (normaliter komen die uit een formulier, maar voor nu gebruiken we ze even hardcoded
                const response = await axios.get(`http://localhost:8083/friendrequests/profile/${userDetails.profile.id}`);
                // We krijgen een token terug:
                console.log(response.data);
                setFriendrequests(response.data);
                //setProfilesearchresults(response.data);

            } catch (e) {
                console.error(e);
            }
        }

        fetchdata();

    },[]);


    return (
        <div className="outer-container-2 ">
            <div className="inner-container-2">
                <article className="article-section-2">
            {console.log(friendrequests)}

            <p className="p-intro"><strong>Friendrequests: </strong></p>
            {friendrequests.length > 0 && <ul className="article-section-2">
                    {friendrequests.map((friendrequest) => {
                        return (
                            <li key={`${friendrequest.id}-${friendrequest.maker.name}`}>
                                <Link to={`/friendrequestaccept/${friendrequest.id}`}>
                                    {friendrequest.maker.name}
                                </Link>
                                {friendrequest.maker.profileimage}
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

export default Getallfriendrequests;