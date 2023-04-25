import React, {useContext, useEffect, useState} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {Link, useHistory, useParams} from "react-router-dom";
import "../deletefollowrequestpage/deletefollowrequeststyle.css"
import {clickHandlerdelete} from "../../context/components/componentdeleterequest/useDeleterequest";


function Deletefriendrequest() {
    //
    const {userDetails,currenttoken} = useContext(AuthContext);

    const [data, setData] = useState();
    const {followrequestId} = useParams();

    const token = localStorage.getItem("token");

    useEffect(() => {


      clickHandlerdelete(`http://localhost:8083/followrequests/${followrequestId}`, token, data,setData)

    },[]);


    return (
        <div className="outer-container">
            <div className="inner-container">
                {data &&
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