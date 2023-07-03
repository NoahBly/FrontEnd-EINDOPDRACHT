import React, {useContext, useState,useEffect} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';

import "../getallfollowerspage/getallfollowersstyle.css"
import useAcceptrequest from "../../context/components/CustomHookacceptrequest/useAcceptrequest";
import Lists from "../../context/components/componentlist/ListsComponent";


function Getallfollowers() {

    const {userDetails} = useContext(AuthContext);


    console.log(userDetails.profile.id);

    const token = localStorage.getItem("token");

    const followers = useAcceptrequest(null,null,null,`http://localhost:8083/followrequests/profile/${userDetails.profile.id}/followers`,null,null,null,null,null,null,null,null,token)




    return (
        <div className="outer-container-2">
            <div className="inner-container-2">
                <article className="article-section-2">
            {console.log(followers)}

            <p className="p-intro"><strong>Followers: </strong></p>
            {followers.length > 0 && <ul className="article-section-2">
                {followers.map((follower) => {
                    return (
                        <Lists
                            key={`${follower.id}-${follower.friend.name}`}
                            profile={follower}
                            url1={`/followerslistremove/follower/${follower.id}`}
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

export default Getallfollowers;