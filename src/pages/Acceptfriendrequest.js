import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {Link, useHistory, useParams} from "react-router-dom";

function Createfriendrequest() {
    //
    // const {profileidcurrent} = useContext(AuthContext);
    // const {visitedprofileid} = useContext(AuthContext);

    const {friendrequestId} = useParams();

    // const profileidcurrent2 = profileidcurrent;
    // const visitedprofileid2 = visitedprofileid;

    async function clickHandler() {
        // Verstuur de inloggegevens via een post-request naar de backend

        try {
            // 2. We moeten de keys 'email' en 'password' meesturen (normaliter komen die uit een formulier, maar voor nu gebruiken we ze even hardcoded
            const response = await axios.put(`http://localhost:8083//friendrequests/${friendrequestId}`);
            // We krijgen een object terug en kijk dan naar waar de token zit:
            console.log('object uit de backend teruggekregen na posten', response);

            // We geven de token mee aan de context-functie, zodat de context de rest voor ons afhandeld!

        } catch (e) {
            console.error(e);
        }

    }
    clickHandler();

    return (
        <div>
            <h1>Your have accepted this friendrequest!</h1>
            <Link to={`/friendrequests/profile`}> <p>click here to return to the friendrequest list!</p></Link>
        </div>
    );
}

export default Createfriendrequest;