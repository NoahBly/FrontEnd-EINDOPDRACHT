import React, {useContext, useEffect, useState} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {Link, useHistory, useParams} from "react-router-dom";
import "../acceptfriendrequestpage/acceptfriendrequeststyle.css"
import useAcceptrequest, {clickHandleraccept} from "../../context/components/componentacceptrequest/useAcceptrequest";
import {clickHandler} from "../../context/components/componentgetList/useGetlist";


function Acceptfriendrequest() {
    //
    // const {profileidcurrent} = useContext(AuthContext);
    // const {visitedprofileid} = useContext(AuthContext);
    const [data, setData] = useState([]);


    const {friendrequestId} = useParams();


const token = localStorage.getItem("token");




    useEffect(() => {
        clickHandleraccept(`http://localhost:8083/friendrequests/${friendrequestId}`,token,data, setData);

    },[]);


    return (
        <div className="outer-container">
            <div className="inner-container ">
                {data &&
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