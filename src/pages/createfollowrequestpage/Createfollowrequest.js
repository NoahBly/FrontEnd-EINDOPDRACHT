import React, {useContext, useEffect, useState} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';

import {Link, useHistory, useParams} from "react-router-dom";
import "../createfollowrequestpage/createfollowrequeststyle.css"

import {clickHandlerCreate} from "../../context/components/componentcreaterequest/useCreaterequest";
import {ProfileContext} from "../../context/profilecontext/ProfileContext";
import useAcceptrequest from "../../context/components/componentacceptrequest/useAcceptrequest";



function Createfollowrequest() {

    const {userDetails} = useContext(AuthContext);
    const {visitedprofileid} = useContext(ProfileContext);
    const profileidcurrent2 = userDetails.profile.id;
    const visitedprofileid2 = visitedprofileid;



const token = localStorage.getItem("token");

const followrequests = useAcceptrequest(null,`http://localhost:8083/followrequests/create/${profileidcurrent2}/${visitedprofileid2}`,null,null ,token)

console.log(followrequests);


    return (
        <div className="outer-container-2">
            <div className="inner-container-2">
                {followrequests &&
                    <article className="article-section-2">
                        <h1 className="h1-intro ">Your Followrequest has been created!</h1>
                        <Link to={`/searchresultsprofiles/${visitedprofileid}`}><p>click here to return to the visited
                            profile!</p></Link>
                    </article>
                }
            </div>
        </div>
    );
}

export default Createfollowrequest;