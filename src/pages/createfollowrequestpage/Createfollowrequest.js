import React, {useContext, useEffect, useState} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {Link, useHistory, useParams} from "react-router-dom";
import "../createfollowrequestpage/createfollowrequeststyle.css"
import {clickHandler} from "../../context/components/componentgetList/useGetlist";
import {clickHandlerCreate} from "../../context/components/componentcreaterequest/useCreaterequest";
import {ProfileContext} from "../../context/profilecontext/ProfileContext";



function Createfollowrequest() {

    const {userDetails} = useContext(AuthContext);
    const {visitedprofileid} = useContext(ProfileContext);
    const profileidcurrent2 = userDetails.profile.id;
    const visitedprofileid2 = visitedprofileid;
    const [data, setData] = useState([]);


const token = localStorage.getItem("token");


console.log(data);
    useEffect(() => {
        clickHandlerCreate(`http://localhost:8083/followrequests/create/${profileidcurrent2}/${visitedprofileid2}`, token, data, setData);

    },[]);



    return (
        <div className="outer-container-2">
            <div className="inner-container-2">
                {data &&
                    <article className="article-section-2">
                        <h1 className="h1-intro ">Your Followrequest has been created!</h1>
                        <Link to={`/searchresultsprofiles/${visitedprofileid}`}><p>click here to return to the visited
                            profile!</p></Link>
                    </article>
                }
            </div>
        </div>
    );
}

export default Createfollowrequest;