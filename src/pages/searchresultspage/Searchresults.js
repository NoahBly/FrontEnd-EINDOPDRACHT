import React, {useContext, useState,useEffect} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import {Link} from "react-router-dom";

function Searchresults() {

    const [resultsprofiles, setResultprofiles] = useState({});
    const {profilesearchresults} = useContext(AuthContext);

    console.log(profilesearchresults);

    const token = localStorage.getItem("token");
    useEffect(() => {
        async function fetchdata() {
            // Verstuur de inloggegevens via een post-request naar de backend
            try {
                // 2. We moeten de keys 'email' en 'password' meesturen (normaliter komen die uit een formulier, maar voor nu gebruiken we ze even hardcoded
                const response = await axios.get(`http://localhost:8083/profiles/profile/${profilesearchresults}`,{
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`, // is hetzelfde als 'Bearer ' + token,
                    }});
                // We krijgen een token terug:
                console.log(response.data);
                setResultprofiles(response.data);
                //setProfilesearchresults(response.data);

            } catch (e) {
                console.error(e);
            }
        }

        fetchdata();

    },[]);


    return (
        <div>
            <h1>Searchresults for : {profilesearchresults}</h1>
            <p><strong>Results: </strong></p>
            {resultsprofiles.length > 0 ? <ul>
                {resultsprofiles.map((profile) => {
                    return (
                        <li key={`${profile.id}-${profile.name}`}>
                            <Link to={`/searchresultsprofiles/${profile.id}`}>
                                {profile.name}
                            </Link>

                        </li>
                    )
                })}
            </ul>:
                <Link to={`/searchresultsprofiles/${resultsprofiles.id}`}>
                    {resultsprofiles.name}
                </Link>
            }

        </div>
    );
}

export default Searchresults;