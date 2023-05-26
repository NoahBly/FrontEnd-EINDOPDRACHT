import React, {useContext, useEffect, useState} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {Link, useHistory, useParams} from "react-router-dom";
import "../deletefollowerpage/deletefollowerstyle.css"
import {clickHandlerdelete} from "../../context/components/componentdeleterequest/useDeleterequest";
import useAcceptrequest from "../../context/components/componentacceptrequest/useAcceptrequest";


function Deletefollower() {
    //
    const {userDetails} = useContext(AuthContext);
    const [data, setData] = useState();

    const {followerId} = useParams();

    const token = localStorage.getItem("token");

    const follower = useAcceptrequest(null,null,`http://localhost:8083/followrequests/profile/${userDetails.user.profile.id}/followers/${followerId}`,null,token)



    return (
        <div className="outer-container">
            <div className="inner-container">
                {follower &&
                <article className="article-begin">
            <h1>You have deleted this follower from your followerslist!</h1>
            <Link to={`/followerslist/profile`}> <p>click here to return to the followers list!</p></Link>
            </article>
                }
        </div>
        </div>
    );
}

export default Deletefollower;