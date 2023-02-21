import React, {useContext, useState,useEffect} from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import {Link} from "react-router-dom";

function Searchresults() {

    const [followrequests, setFollowrequests] = useState({});
    const {profileidcurrent} = useContext(AuthContext);

    console.log(profileidcurrent);

    useEffect(() => {

        async function fetchdata() {
            // Verstuur de inloggegevens via een post-request naar de backend
            try {
                // 2. We moeten de keys 'email' en 'password' meesturen (normaliter komen die uit een formulier, maar voor nu gebruiken we ze even hardcoded
                const response = await axios.get(`http://localhost:8083//followrequests/profile/${profileidcurrent}`);
                // We krijgen een token terug:
                console.log(response.data);
                setFollowrequests(response.data);
                //setProfilesearchresults(response.data);

            } catch (e) {
                console.error(e);
            }
        }

        fetchdata();

    },[]);


    return (
        <div>
            <p><strong>Results: </strong></p>
            {followrequests.length > 0 ? <ul>
                    {followrequests.map((followrequest) => {
                        return (
                            <li key={`${followrequest.id}-${followrequest.maker.name}`}>
                                <Link to={`/followrequestaccept/${followrequest.id}`}>
                                    {followrequest.maker.name}
                                </Link>
                                {followrequest.maker.profileimage}
                            </li>
                        )
                    })}
                </ul>:
                <Link to={`/followrequestaccept/${followrequests[0].id}`}>
                    {followrequests[0].maker.name}
                </Link>
            }

        </div>
    );
}

export default Searchresults;