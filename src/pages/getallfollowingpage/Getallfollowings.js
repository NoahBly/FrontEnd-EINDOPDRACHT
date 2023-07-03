import React, {useContext, useState,useEffect} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import {Link} from "react-router-dom";
import "../getallfollowingpage/getallfollowingpagestyle.css"
import useAcceptrequest from "../../context/components/CustomHookacceptrequest/useAcceptrequest";
import Lists from "../../context/components/componentlist/ListsComponent";

function Getallfollowings() {

    const {userDetails} = useContext(AuthContext);



    console.log(userDetails);
    const token = localStorage.getItem("token");

    const followings = useAcceptrequest(null,null,null,`http://localhost:8083/followrequests/profile/${userDetails.profile.id}/followings`,null,null,null,null,null,null,null,null,token)



    return (
        <div className="outer-container-2">
            <div className="inner-container-2">
                <article className="article-section-2">
            {console.log(followings)}

            <p className="p-intro "><strong>Following: </strong></p>
            {followings.length > 0 && <ul className="article-section-2">
                {followings.map((following) => {
                    return (
                        <Lists
                            key={`${following.id}-${following.friend.name}`}
                            profile={following}
                            url1={`/followingslistremove/following/${following.id}`}
                        >
                            Delete as friend
                        </Lists>
                    )
                })}
            </ul>
            }
                </article>
        </div>
        </div>
    );
}

export default Getallfollowings;