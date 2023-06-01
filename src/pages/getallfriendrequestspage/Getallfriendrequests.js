import React, {useContext, useState,useEffect} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import {Link} from "react-router-dom";
import "../getallfriendrequestspage/getallfriendrequestsstyle.css"
import {clickHandler} from "../../context/components/componentgetList/useGetlist";
import Request from "../../context/components/componentgetrequest/componentListRequest";
import useAcceptrequest from "../../context/components/componentacceptrequest/useAcceptrequest";
import CommentsComponent from "../../context/components/componentcomments/CommentsComponent";

function Getallfriendrequests() {


    const [test, setTest] = useState(false);

    const {userDetails} = useContext(AuthContext);

    console.log(userDetails.profile.id);
    const token = localStorage.getItem("token");

    const friendrequests = useAcceptrequest(null,null,null,`http://localhost:8083/friendrequests/profile/${userDetails.profile.id}`,null,null,null,null,null,null,null,null, token)

    useEffect(() => {


}, [test])




    return (
        <div className="outer-container-2 ">
            <div className="inner-container-2">
                <article className="article-section-2">
            {console.log(friendrequests)}

            <p className="p-intro"><strong>Friendrequests: </strong></p>
            {friendrequests.length > 0 && <ul className="article-section-2">
                    {friendrequests.map((friendrequest) => {
                        return (

                            <CommentsComponent
                            key={`${friendrequest.id}-${friendrequest.maker.name}`}
                            setTest={setTest}
                            test={test}
                            request={friendrequest}
                            url1={`/friendrequestaccept/${friendrequest.id}`}
                            url2={`/friendrequestaccept/${friendrequest.id}`}
                            >
                                Delete friendrequest from

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

export default Getallfriendrequests;