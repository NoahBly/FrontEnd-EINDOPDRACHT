import React, {useContext, useEffect, useState} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {Link, useHistory, useParams} from "react-router-dom";
import "../deletepostpage/deletepoststyle.css"
import {clickHandlerdelete} from "../../context/components/componentdeleterequest/useDeleterequest";
import {ProfileContext} from "../../context/profilecontext/ProfileContext";


function Deletepost() {
    //
    const {postidcurrent} = useContext(ProfileContext);

    const [data, setData] = useState();

    const token = localStorage.getItem("token");

    useEffect(() => {

        const postidcurrent2 = postidcurrent;

        clickHandlerdelete(`http://localhost:8083/posts/post/${postidcurrent2}`, token, data, setData)

    },[]);


    return (
        <div className="outer-container">
            <div className="inner-container">
                {data &&
                <article className="article-begin">
            <h1>You have deleted this post!</h1>
            <Link to={`/profile`}> <p>click here to return to your profile!</p></Link>
            </article>
                }
        </div>
        </div>
    );
}

export default Deletepost;