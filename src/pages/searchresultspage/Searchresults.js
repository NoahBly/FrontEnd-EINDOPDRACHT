import React, {useContext, useState,useEffect} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import {Link} from "react-router-dom";
import {ProfileContext} from "../../context/profilecontext/ProfileContext";

function Searchresults() {

    const [resultsprofiles, setResultprofiles] = useState({});
    const {profilesearchresults} = useContext(ProfileContext);

    console.log(profilesearchresults);

    const token = localStorage.getItem("token");
    useEffect(() => {
        async function fetchdata() {
            // Verstuur de inloggegevens via een post-request naar de backend
            try {

                const response = await axios.get(`http://localhost:8083/profiles/profile/${profilesearchresults}`,{
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`, // is hetzelfde als 'Bearer ' + token,
                    }});

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