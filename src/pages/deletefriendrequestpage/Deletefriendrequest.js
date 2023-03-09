import React, { useContext , useEffect } from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {Link, useHistory, useParams} from "react-router-dom";
import "../deletefriendrequestpage/deletefriendrequetstyle.css"


function Deletefriendrequest() {
    //
    const {userDetails} = useContext(AuthContext);
    // const {visitedprofileid} = useContext(AuthContext);

    const {friendrequestId} = useParams();


    // const visitedprofileid2 = visitedprofileid;
    useEffect(() => {

        const profileidcurrent2 = userDetails.profile.id;

        async function clickHandler() {
            // Verstuur de inloggegevens via een post-request naar de backend

            try {
                // 2. We moeten de keys 'email' en 'password' meesturen (normaliter komen die uit een formulier, maar voor nu gebruiken we ze even hardcoded
                const response = await axios.delete(`http://localhost:8083/friendrequests/${friendrequestId}`);
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
        <div className="outer-container">
            <div className="inner-container">
                <article className="article-begin">
                    <h1>You have deleted this friendrequest from your list!</h1>
                    <Link to={`/friendrequests/profile`}> <p>click here to return to the friendrequests list!</p></Link>
                </article>
            </div>
        </div>
    );
}

export default Deletefriendrequest;