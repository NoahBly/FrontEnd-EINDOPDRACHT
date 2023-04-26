import {Link} from "react-router-dom";
import React from "react";

function Request ({request,children, url,setTest,test}) {

    return (


        <li >

            <Link  to={url} >
                <button onClick={( ) => setTest(!test)}  className="text-align ">accept as friend :   {request.maker.name}</button>
            </Link>
            <p className="text-align">  or  </p>
            <Link to={url} >
                <p className="text-align">{children} {request.maker.name}</p>
            </Link>

        </li>

    );

}

export default Request;