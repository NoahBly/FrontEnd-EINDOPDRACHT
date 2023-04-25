import React, {useContext, useEffect, useState} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {Link, useHistory, useParams} from "react-router-dom";
import "../deletefriendrequestpage/deletefriendrequetstyle.css"
import {clickHandlerdelete} from "../../context/components/componentdeleterequest/useDeleterequest";


function Deletefriendrequest() {
    //
    const {userDetails,currenttoken} = useContext(AuthContext);


    const {friendrequestId} = useParams();
    const [data, setData] = useState([]);



    const token = localStorage.getItem("token");

    useEffect(() => {
        clickHandlerdelete(`http://localhost:8083/friendrequests/${friendrequestId}`,token,data,setData);
    },[]);


    return (
        <div className="outer-container">
            <div className="inner-container">
                {data &&
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