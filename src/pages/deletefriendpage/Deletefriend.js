import React, {useContext, useEffect, useState} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {Link, useHistory, useParams} from "react-router-dom";
import "../deletefriendpage/deletefriendstyle.css"
import {clickHandlerdelete} from "../../context/components/componentdeleterequest/useDeleterequest";


function Deletefriend() {
    //
    const {userDetails,currenttoken} = useContext(AuthContext);
    // const {visitedprofileid} = useContext(AuthContext);
    const [data,setData] = useState();
    const {friendId} = useParams();


    const token = localStorage.getItem("token");

    useEffect(() => {

        const profileidcurrent2 = userDetails.profile.id;
        clickHandlerdelete(`http://localhost:8083/friendrequests/profile/${profileidcurrent2}/friends/${friendId}`,token,data,setData);

    },[]);


    return (
        <div className="outer-container">
            <div className="inner-container">
                {data &&
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