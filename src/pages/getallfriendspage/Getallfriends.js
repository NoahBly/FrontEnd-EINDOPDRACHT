import React, {useContext, useState,useEffect} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import {Link} from "react-router-dom";
import "../getallfriendspage/getallfriendsstyle.css"
import {clickHandler} from "../../context/components/componentgetList/useGetlist";
import List from "../../context/components/componentgetfriendfollowerfollowing/componentGetlist";
// import useGetlist from "../../context/components/componentgetList/useGetlist";

function Getallfriends() {

    const [friends, setFriends] = useState([]);
    const {userDetails} = useContext(AuthContext);
    const [data, setData] = useState([]);


    console.log(userDetails.profile.id);

const token = localStorage.getItem("token");



    console.log(data);

    useEffect(() => {
        clickHandler(`http://localhost:8083/friendrequests/profile/${userDetails.profile.id}/friends`, token, friends, setFriends);

    },[]);


    return (
        <div className="outer-container-2">
            <div className="inner-container-2">
                <article className="article-section-2">
            {console.log(friends)}

            <p className ="p-intro " ><strong>Friends: </strong></p>
            {friends.length > 0 && <ul className="article-section-2">
                {friends.map((friend ) => {
                    return (

                        <List
                        key={`${friend.id}-${friend.friend.name}`}
                        profile={friend}
                        url={`/friendlistremove/friend/${friend.id}`}
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

export default Getallfriends;