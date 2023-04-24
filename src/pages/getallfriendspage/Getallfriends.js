import React, {useContext, useState,useEffect} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import {Link} from "react-router-dom";
import "../getallfriendspage/getallfriendsstyle.css"
import {clickHandler} from "../../context/components/componentgetList/useGetlist";
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
                        <li key={`${friend.id}-${friend.friend.name}`}>

                              <p><strong> {friend.friend.name}</strong></p>

                            <Link to={`/friendlistremove/friend/${friend.id}`}>
                                remove {friend.friend.name} as friend
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

export default Getallfriends;