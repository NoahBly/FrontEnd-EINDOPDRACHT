import React, {useContext, useEffect, useState} from 'react';
import {Link, useHistory, useParams} from "react-router-dom";
import "../acceptfollowrequestpage/acceptfollowrequeststyle.css"
import useAcceptrequest, {clickHandleraccept} from "../../context/components/componentacceptrequest/useAcceptrequest";
import {clickHandler} from "../../context/components/componentgetList/useGetlist";


function Acceptfollowrequest() {
    //
    // const {profileidcurrent} = useContext(AuthContext);
    // const {visitedprofileid} = useContext(AuthContext);
    const [data,setData] = useState([]);
    const [data2,setData2] = useState([]);

    const {followrequestId} = useParams();

    // const profileidcurrent2 = profileidcurrent;
    // const visitedprofileid2 = visitedprofileid;
 const token = localStorage.getItem("token");



    useEffect(() => {

        clickHandleraccept(`http://localhost:8083/followrequests/${followrequestId}`,token, data, setData);
        setData2(data);
    },[]);



    return (
        <div className="outer-container">
        <div className="inner-container">
            {data &&
                <article className="article-begin">
                    <h1>You have accepted this followrequest!</h1>
                    <Link to={`/followrequests/profile`}><p>click here to return to the followrequest list!</p></Link>
                </article>
            }
        </div>
        </div>
    );
}

export default Acceptfollowrequest;