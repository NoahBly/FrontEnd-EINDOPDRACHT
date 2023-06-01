import React, {useContext, useState,useEffect} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import {Link} from "react-router-dom";
import "../getallfollowrequestspage/getallfollowrequestsstyle.css"
import {clickHandler} from "../../context/components/componentgetList/useGetlist";
import useAcceptrequest from "../../context/components/componentacceptrequest/useAcceptrequest";
import Request from "../../context/components/componentgetrequest/componentListRequest";
import CommentsComponent from "../../context/components/componentcomments/CommentsComponent";

function Getallfollowrequests() {

  const [test, setTest] = useState([]);

    const {userDetails} = useContext(AuthContext);

    console.log(userDetails);
    const token = localStorage.getItem("token");

    const followrequests = useAcceptrequest(null,null,null,`http://localhost:8083/followrequests/profile/${userDetails.profile.id}`,null,null,null,null,null,null,null,null, token)



console.log(followrequests);




    return (
        <div className="outer-container-2">
            <div className="inner-container-2 ">
                <article className="article-section-2">
            <p className="p-intro"><strong>Followrequests: </strong></p>
            {followrequests.length > 0 && <ul className="article-section-2">
                    {followrequests.map((followrequest) => {
                        return (


                            <CommentsComponent
                                key={`${followrequest.id}-${followrequest.maker.name}`}
                                setTest={setTest}
                                test={test}
                                request={followrequest}
                                url1={`/followrequestaccept/${followrequest.id}`}
                                url2={`/followrequestdelete/${followrequest.id}`}
                            >
                                Delete followrequest from

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

export default Getallfollowrequests;