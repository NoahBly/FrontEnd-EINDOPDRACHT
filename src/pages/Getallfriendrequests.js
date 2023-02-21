import React, {useContext, useState,useEffect} from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import {Link} from "react-router-dom";

function Getallfriendrequests() {

    const [friendrequests, setFriendrequests] = useState({});
    const {profileidcurrent} = useContext(AuthContext);

    console.log(profileidcurrent);

    useEffect(() => {

        async function fetchdata() {
            // Verstuur de inloggegevens via een post-request naar de backend
            try {
                // 2. We moeten de keys 'email' en 'password' meesturen (normaliter komen die uit een formulier, maar voor nu gebruiken we ze even hardcoded
                const response = await axios.get(`http://localhost:8083/friendrequests/profile/${profileidcurrent}`);
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
        <div>

            <p><strong>Results: </strong></p>
            {friendrequests.length > 0 ? <ul>
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
                </ul>:
                <Link to={`/friendrequestaccept/${friendrequests.id}`}>
                    {friendrequests.maker.name}
                </Link>
            }

        </div>
    );
}

export default Getallfriendrequests;