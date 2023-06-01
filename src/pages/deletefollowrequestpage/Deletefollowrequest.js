import React, {useContext, useEffect, useState} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {Link, useHistory, useParams} from "react-router-dom";
import "../deletefollowrequestpage/deletefollowrequeststyle.css"
import {clickHandlerdelete} from "../../context/components/componentdeleterequest/useDeleterequest";
import useAcceptrequest from "../../context/components/componentacceptrequest/useAcceptrequest";


function Deletefriendrequest() {
    //

    const [data, setData] = useState();
    const {followrequestId} = useParams();

    const token = localStorage.getItem("token");

    const followrequest = useAcceptrequest(null,null,`http://localhost:8083/followrequests/${followrequestId}`,null,null,null,null,null,null,null,null,null, token)


    return (
        <div className="outer-container">
            <div className="inner-container">
                {followrequest &&
                <article className="article-begin">
                    <h1>You have deleted this followrequest from your list!</h1>
                    <Link to={`/followrequests/profile`}> <p>click here to return to the followrequests list!</p></Link>
                </article>
                }
            </div>
        </div>
    );
}

export default Deletefriendrequest;