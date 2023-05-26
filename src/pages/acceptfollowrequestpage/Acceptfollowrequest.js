import React, {useContext, useEffect, useState} from 'react';
import {Link, useHistory, useParams} from "react-router-dom";
import "../acceptfollowrequestpage/acceptfollowrequeststyle.css"
import useAcceptrequest, {clickHandleraccept} from "../../context/components/componentacceptrequest/useAcceptrequest";



function Acceptfollowrequest() {



    const {followrequestId} = useParams();


 const token = localStorage.getItem("token");


 const followrequests = useAcceptrequest(`http://localhost:8083/followrequests/${followrequestId}`,token)



    return (
        <div className="outer-container">
        <div className="inner-container">
            {followrequests &&
                <article className="article-begin">
                    <h1>You have accepted this followrequest!</h1>
                    <Link to={`/followrequests/profile`}><p>click here to return to the followrequest list!</p></Link>
                </article>
            }
        </div>
        </div>
    );
}

export default Acceptfollowrequest;