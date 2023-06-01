import React, {useContext, useEffect, useState} from 'react';

import {Link, useHistory, useParams} from "react-router-dom";
import "../acceptfriendrequestpage/acceptfriendrequeststyle.css"
import useAcceptrequest, {clickHandleraccept} from "../../context/components/componentacceptrequest/useAcceptrequest";



function Acceptfriendrequest() {
    //



    const {friendrequestId} = useParams();


const token = localStorage.getItem("token");

const friendrequests = useAcceptrequest(`http://localhost:8083/friendrequests/${friendrequestId}`,null,null,null,null,null,null,null,null,null,null,null,token)




    return (
        <div className="outer-container">
            <div className="inner-container ">
                {friendrequests &&
                    <article className="article-begin">
                        <h1>You have accepted this friendrequest!</h1>
                        <Link to={`/friendrequests/profile`}><p>click here to return to the friendrequest list!</p>
                        </Link>
                    </article>
                }
        </div>
        </div>
    );
}

export default Acceptfriendrequest;