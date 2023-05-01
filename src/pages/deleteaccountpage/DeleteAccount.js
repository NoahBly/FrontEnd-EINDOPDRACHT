import React, { useContext , useEffect } from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';

import {Link, useHistory, useParams} from "react-router-dom";
import "../deleteaccountpage/deleteaccountstyle.css"


function Deleteaccount() {
    //
    const {userDetails,logoutFunction,currenttoken} = useContext(AuthContext);

    const history = useHistory();


    useEffect(() => {

        const useridcurrent2 = userDetails.id;

        async function clickHandler() {
            // Verstuur de inloggegevens via een post-request naar de backend

            try {

                const response = await axios.delete(`http://localhost:8083/users/${useridcurrent2}`,{
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${currenttoken}`, // is hetzelfde als 'Bearer ' + token,
                    }});
                // We krijgen een object terug
                console.log('object uit de backend teruggekregen na posten', response);
                logoutFunction();


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