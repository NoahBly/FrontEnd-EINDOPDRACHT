import React, {useContext, useState,useEffect} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import {Link} from "react-router-dom";
import "../getallfollowerspage/getallfollowersstyle.css"
import {clickHandler} from "../../context/components/componentgetList/useGetlist";
import List from "../../context/components/componentgetfriendfollowerfollowing/componentGetlist";
// import useGetlist from "../../context/components/componentgetList/useGetlist";

function Getallfollowers() {

    const [followers, setFollowers] = useState([]);
    const {userDetails} = useContext(AuthContext);


    console.log(userDetails.profile.id);

    const token = localStorage.getItem("token");



    useEffect(() => {
        clickHandler(`http://localhost:8083/followrequests/profile/${userDetails.profile.id}/followers`, token, followers, setFollowers)


    },[]);


    return (
        <div className="outer-container-2">
            <div className="inner-container-2">
                <article className="article-section-2">
            {console.log(followers)}

            <p className="p-intro"><strong>Followers: </strong></p>
            {followers.length > 0 && <ul className="article-section-2">
                {followers.map((follower) => {
                    return (
                        <List
                            key={`${follower.id}-${follower.friend.name}`}
                            profile={follower}
                            url={`/followerslistremove/follower/${follower.id}`}
                        >
                            Delete as friend
                        </List>


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