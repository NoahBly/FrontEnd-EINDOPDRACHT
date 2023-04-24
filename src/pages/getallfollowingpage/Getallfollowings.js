import React, {useContext, useState,useEffect} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import {Link} from "react-router-dom";
import "../getallfollowingpage/getallfollowingpagestyle.css"
import {clickHandler} from "../../context/components/componentgetList/useGetlist";

function Getallfollowings() {

    const [followings, setFollowings] = useState([]);
    const {userDetails} = useContext(AuthContext);



    console.log(userDetails);
    const token = localStorage.getItem("token");

    useEffect(() => {
        clickHandler(`http://localhost:8083/followrequests/profile/${userDetails.profile.id}/followings`, token,followings, setFollowings)

    },[]);


    return (
        <div className="outer-container-2">
            <div className="inner-container-2">
                <article className="article-section-2">
            {console.log(followings)}

            <p className="p-intro "><strong>Following: </strong></p>
            {followings.length > 0 && <ul className="article-section-2">
                {followings.map((following) => {
                    return (
                        <li key={`${following.id}-${following.friend.name}`}>

                            <p><strong> {following.friend.name}</strong></p>

                            <Link to={`/followingslistremove/following/${following.id}`}>
                                remove {following.friend.name} as friend
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

export default Getallfollowings;