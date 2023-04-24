import React, { useContext , useEffect } from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {Link, useHistory, useParams} from "react-router-dom";
import "../deleteaccountpage/deleteaccountstyle.css"


function Deleteaccount() {
    //
    const {userDetails} = useContext(AuthContext);
    // const {visitedprofileid} = useContext(AuthContext);
    const {logoutFunction,currenttoken} = useContext(AuthContext);
    const history = useHistory();


    // const visitedprofileid2 = visitedprofileid;
    useEffect(() => {

        const useridcurrent2 = userDetails.id;

        async function clickHandler() {
            // Verstuur de inloggegevens via een post-request naar de backend

            try {
                // 2. We moeten de keys 'email' en 'password' meesturen (normaliter komen die uit een formulier, maar voor nu gebruiken we ze even hardcoded
                const response = await axios.delete(`http://localhost:8083/users/${useridcurrent2}`,{
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${currenttoken}`, // is hetzelfde als 'Bearer ' + token,
                    }});
                // We krijgen een object terug en kijk dan naar waar de token zit:
                console.log('object uit de backend teruggekregen na posten', response);
                logoutFunction();
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
            <h1>You have deleted this account!</h1>
            <Link to={`/`}> <p>click here to return to the home page!</p></Link>
            </article>
            </div>
        </div>
    );
}

export default Deleteaccount;