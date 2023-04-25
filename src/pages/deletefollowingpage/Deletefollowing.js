import React, {useContext, useEffect, useState} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {Link, useHistory, useParams} from "react-router-dom";
import "../deletefollowingpage/deletefollowingstyle.css"
import {clickHandlerdelete} from "../../context/components/componentdeleterequest/useDeleterequest";


function Deletefollowing() {
    //
    const {userDetails} = useContext(AuthContext);
    const [data, setData] = useState();

    const {followingId} = useParams();

    const token = localStorage.getItem("token");

    useEffect(() => {

        const profileidcurrent2 = userDetails.profile.id;

        clickHandlerdelete(`http://localhost:8083/followrequests/profile/${profileidcurrent2}/following/${followingId}`,token, data, setData)

    },[]);


    return (
        <div className="outer-container">
            <div className="inner-container">
                {data &&
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