import React, { useContext ,useEffect} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {Link, useHistory, useParams} from "react-router-dom";
import "../createfriendrequestpage/createfriendrequeststyle.css"


function Createfriendrequest() {

    const {userDetails} = useContext(AuthContext);
    const {visitedprofileid} = useContext(AuthContext);


    useEffect(() => {
    const profileidcurrent2 = userDetails.profile.id;
    const visitedprofileid2 = visitedprofileid;


    async function clickHandler() {
        // Verstuur de inloggegevens via een post-request naar de backend

        try {
            // 2. We moeten de keys 'email' en 'password' meesturen (normaliter komen die uit een formulier, maar voor nu gebruiken we ze even hardcoded
            const response = await axios.post(`http://localhost:8083/friendrequests/create/${profileidcurrent2}/${visitedprofileid2}`);
            // We krijgen een object terug en kijk dan naar waar de token zit:
            console.log('object uit de backend teruggekregen na posten', response);

            // We geven de token mee aan de context-functie, zodat de context de rest voor ons afhandeld!

        } catch (e) {
            console.error(e);
        }

    }
        clickHandler();
    },[]);


    return (
        <div className="outer-container-2 ">
            <div className="inner-container-2">
                <article className="article-section-2">
            <h1>Your Friendrequest has been created!</h1>
            <Link to={`/searchresultsprofiles/${visitedprofileid}`}> <p>click here to return to the visited profile!</p></Link>
            </article>
            </div>
        </div>
    );
}

export default Createfriendrequest;