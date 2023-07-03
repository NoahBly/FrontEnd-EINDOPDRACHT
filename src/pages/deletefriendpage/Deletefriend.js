import React, {useContext, useEffect, useState} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {Link, useHistory, useParams} from "react-router-dom";
import "../deletefriendpage/deletefriendstyle.css"
import useAcceptrequest from "../../context/components/CustomHookacceptrequest/useAcceptrequest";


function Deletefriend() {
    //
    const {userDetails} = useContext(AuthContext);
    // const {visitedprofileid} = useContext(AuthContext);
    const [data,setData] = useState();
    const {friendId} = useParams();


    const token = localStorage.getItem("token");

    const friend = useAcceptrequest(null,null,`http://localhost:8083/friendrequests/profile/${userDetails.profile.id}/friends/${friendId}`,null, null,null,null,null,null,null,null,null,token)



    return (
        <div className="outer-container">
            <div className="inner-container">
                {friend &&
                <article className="article-begin">
            <h1>You have deleted this friend from your friendlist!</h1>
            <Link to={`/friendlist/profile`}> <p>click here to return to the friend list!</p></Link>
            </article>
                }
            </div>
        </div>
    );
}

export default Deletefriend;