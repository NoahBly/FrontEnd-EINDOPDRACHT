import React, {useContext, useState,useEffect} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';

import "../getallfollowerspage/getallfollowersstyle.css"
import {clickHandler} from "../../context/components/componentgetList/useGetlist";
import List from "../../context/components/componentgetfriendfollowerfollowing/componentGetlist";
import useAcceptrequest from "../../context/components/componentacceptrequest/useAcceptrequest";
import CommentsComponent from "../../context/components/componentcomments/CommentsComponent";


function Getallfollowers() {

    const {userDetails} = useContext(AuthContext);


    console.log(userDetails.profile.id);

    const token = localStorage.getItem("token");

    const followers = useAcceptrequest(null,null,null,`http://localhost:8083/followrequests/profile/${userDetails.profile.id}/followers`,token)




    return (
        <div className="outer-container-2">
            <div className="inner-container-2">
                <article className="article-section-2">
            {console.log(followers)}

            <p className="p-intro"><strong>Followers: </strong></p>
            {followers.length > 0 && <ul className="article-section-2">
                {followers.map((follower) => {
                    return (
                        <CommentsComponent
                            key={`${follower.id}-${follower.friend.name}`}
                            profile={follower}
                            url1={`/followerslistremove/follower/${follower.id}`}
                        >
                            Delete as friend
                        </CommentsComponent>


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