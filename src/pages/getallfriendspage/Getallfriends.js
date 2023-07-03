import React, {useContext, useState,useEffect} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';

import "../getallfriendspage/getallfriendsstyle.css"
import Lists from "../../context/components/componentlist/ListsComponent";
import useAcceptrequest from "../../context/components/CustomHookacceptrequest/useAcceptrequest";


function Getallfriends() {

    const {userDetails} = useContext(AuthContext);
    const [data, setData] = useState([]);


    console.log(userDetails.profile.id);

const token = localStorage.getItem("token");

const friends = useAcceptrequest(null,null,null,`http://localhost:8083/friendrequests/profile/${userDetails.profile.id}/friends`,null,null,null,null,null,null,null,null,token)

    console.log(friends);



    return (
        <div className="outer-container-2">
            <div className="inner-container-2">
                <article className="article-section-2">
            {console.log(friends)}

            <p className ="p-intro " ><strong>Friends: </strong></p>
            {friends.length > 0 && <ul className="article-section-2">
                {friends.map((friend ) => {
                    return (

                        <Lists
                        key={`${friend.id}-${friend.friend.name}`}
                        profile={friend}
                        url1={`/friendlistremove/friend/${friend.id}`}
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

export default Getallfriends;