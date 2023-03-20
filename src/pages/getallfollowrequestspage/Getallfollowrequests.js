import React, {useContext, useState,useEffect} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import {Link} from "react-router-dom";
import "../getallfollowrequestspage/getallfollowrequestsstyle.css"

function Getallfollowrequests() {

    const [followrequests, setFollowrequests] = useState({});
    const {userDetails} = useContext(AuthContext);

    console.log(userDetails);

    useEffect(() => {

        async function fetchdata() {
            // Verstuur de inloggegevens via een post-request naar de backend
            try {
                // 2. We moeten de keys 'email' en 'password' meesturen (normaliter komen die uit een formulier, maar voor nu gebruiken we ze even hardcoded
                const response = await axios.get(`http://localhost:8083/followrequests/profile/${userDetails.profile.id}`);
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
        <div className="outer-container-2">
            <div className="inner-container-2 ">
                <article className="article-section-2">
            <p className="p-intro"><strong>Followrequests: </strong></p>
            {followrequests.length > 0 && <ul className="article-section-2">
                    {followrequests.map((followrequest) => {
                        return (
                            <li key={`${followrequest.id}-${followrequest.maker.name}`}>
                                <Link to={`/followrequestaccept/${followrequest.id}`} >
                              <p className="text-align"> accept followrequest from : {followrequest.maker.name}</p>
                            </Link>
                                <p className="text-align">  or  </p>
                                <Link to={`/followrequestdelete/${followrequest.id}`} >
                                   <p className="text-align"> delete followrequest from : {followrequest.maker.name}</p>
                                </Link>
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

export default Getallfollowrequests;