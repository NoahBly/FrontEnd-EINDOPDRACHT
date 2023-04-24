import React, {useContext, useState,useEffect} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import {Link} from "react-router-dom";
import "../getallfollowrequestspage/getallfollowrequestsstyle.css"
import {clickHandler} from "../../context/components/componentgetList/useGetlist";

function Getallfollowrequests() {

  const [test, setTest] = useState([]);
    const [followrequests, setFollowrequests] = useState([]);
    const {userDetails} = useContext(AuthContext);

    console.log(userDetails);
    const token = localStorage.getItem("token");

    useEffect(() => {
        clickHandler(`http://localhost:8083/followrequests/profile/${userDetails.profile.id}`, token, followrequests, setFollowrequests);

    }, [test])



console.log(followrequests);




    return (
        <div className="outer-container-2">
            <div className="inner-container-2 ">
                <article className="article-section-2">
            <p className="p-intro"><strong>Followrequests: </strong></p>
            {followrequests.length > 0 && <ul className="article-section-2">
                    {followrequests.map((followrequest) => {
                        return (
                            <li key={`${followrequest.id}-${followrequest.maker.name}`}>
                                <Link to={`/followrequestaccept/${followrequest.id}`} >
                              <button onClick={( ) => setTest(!test)} className="text-align"> accept followrequest from : {followrequest.maker.name}</button>
                            </Link>
                                <p className="text-align">  or  </p>
                                <Link to={`/followrequestdelete/${followrequest.id}`} >
                                   <p className="text-align"> delete followrequest from : {followrequest.maker.name}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            }
                </article>
        </div>
        </div>
    );
}

export default Getallfollowrequests;