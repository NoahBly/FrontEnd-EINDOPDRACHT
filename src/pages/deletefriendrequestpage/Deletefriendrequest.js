import React, {useContext, useEffect, useState} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {Link, useHistory, useParams} from "react-router-dom";
import "../deletefriendrequestpage/deletefriendrequetstyle.css"
import {clickHandlerdelete} from "../../context/components/componentdeleterequest/useDeleterequest";
import useAcceptrequest from "../../context/components/componentacceptrequest/useAcceptrequest";


function Deletefriendrequest() {
    //

    const {friendrequestId} = useParams();

    const token = localStorage.getItem("token");

     const friendrequest = useAcceptrequest(null,null,`http://localhost:8083/friendrequests/${friendrequestId}`,null, token)





    return (
        <div className="outer-container">
            <div className="inner-container">
                {friendrequest &&
                <article className="article-begin">
                    <h1>You have deleted this friendrequest from your list!</h1>
                    <Link to={`/friendrequests/profile`}> <p>click here to return to the friendrequests list!</p></Link>
                </article>
                }
            </div>
        </div>
    );
}

export default Deletefriendrequest;