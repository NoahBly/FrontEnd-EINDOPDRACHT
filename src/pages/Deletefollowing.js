import React, { useContext , useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {Link, useHistory, useParams} from "react-router-dom";


function Deletefollowing() {
    //
    const {profileidcurrent} = useContext(AuthContext);
    // const {visitedprofileid} = useContext(AuthContext);

    const {followingId} = useParams();


    // const visitedprofileid2 = visitedprofileid;
    useEffect(() => {

        const profileidcurrent2 = profileidcurrent;

        async function clickHandler() {
            // Verstuur de inloggegevens via een post-request naar de backend

            try {
                // 2. We moeten de keys 'email' en 'password' meesturen (normaliter komen die uit een formulier, maar voor nu gebruiken we ze even hardcoded
                const response = await axios.delete(`http://localhost:8083/followrequests/profile/${profileidcurrent2}/following/${followingId}`);
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
        <div>
            <h1>You have deleted this following from your followingslist!</h1>
            <Link to={`/followingslist/profile`}> <p>click here to return to the followinglist!</p></Link>
        </div>
    );
}

export default Deletefollowing;