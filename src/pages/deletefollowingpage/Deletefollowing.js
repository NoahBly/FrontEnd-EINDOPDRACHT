import React, {useContext, useEffect, useState} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {Link, useHistory, useParams} from "react-router-dom";
import "../deletefollowingpage/deletefollowingstyle.css"
import {clickHandlerdelete} from "../../context/components/componentdeleterequest/useDeleterequest";
import useAcceptrequest from "../../context/components/componentacceptrequest/useAcceptrequest";


function Deletefollowing() {
    //
    const {userDetails} = useContext(AuthContext);

    const {followingId} = useParams();

    const token = localStorage.getItem("token");

    const following = useAcceptrequest(null,null,`http://localhost:8083/followrequests/profile/${userDetails.profile.id}/following/${followingId}`,null,token)



    return (
        <div className="outer-container">
            <div className="inner-container">
                {following &&
                <article className="article-begin">
            <h1>You have deleted this following from your followingslist!</h1>
            <Link to={`/followingslist/profile`}> <p>click here to return to the followinglist!</p></Link>
            </article>
                }
        </div>
        </div>
    );
}

export default Deletefollowing;