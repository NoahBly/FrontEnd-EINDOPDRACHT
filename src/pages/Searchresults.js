import React, {useContext, useState,useEffect} from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import {Link} from "react-router-dom";

function Searchresults({data}) {

    const [resultsprofiles, setResultprofiles] = useState({});
    const {setProfilesearchresults} = useContext(AuthContext);

    useEffect(() => {
        async function fetchdata() {
            // Verstuur de inloggegevens via een post-request naar de backend
            try {
                // 2. We moeten de keys 'email' en 'password' meesturen (normaliter komen die uit een formulier, maar voor nu gebruiken we ze even hardcoded
                const response = await axios.get('http://localhost:3000/{data}');
                // We krijgen een token terug:
                console.log(response.data);
                setResultprofiles(response.data);
                setProfilesearchresults(response.data);

            } catch (e) {
                console.error(e);
            }
        }

        fetchdata();

    },[]);


    return (
        <div>
            <p><strong>Results: </strong></p>
            <ul>
                {resultsprofiles.map((profile) => {
                    return (
                        <li key={`${profile.id}-${profile.name}`}>
                            <Link to={`/searchresults/${profile.id}`}>
                            {profile.name}
                            </Link>
                            {profile.imagevideo}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Searchresults;