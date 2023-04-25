import React, {useContext, useEffect, useState} from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {Link, useHistory, useParams} from "react-router-dom";
import ".//deletecommentstyle.css"
import {clickHandlerdelete} from "../../context/components/componentdeleterequest/useDeleterequest";
import {ProfileContext} from "../../context/profilecontext/ProfileContext";


function Deletecomment() {
    //

    const {postidcurrent} = useContext(ProfileContext);
    const {commentId} = useParams();
    const{currenttoken} = useContext(AuthContext);
    console.log(currenttoken);
    const [data,setData] = useState();

    const token = localStorage.getItem("token");

    useEffect(() => {

        clickHandlerdelete(`http://localhost:8083/comments/${commentId}`, token, data, setData)

    },[]);


    return (
        <div className="outer-container">
            <div className="inner-container">
                {data &&
                <article className="article-begin">
            <h1>You have deleted this comment!</h1>
            <Link to={`/post/${postidcurrent}`}> <p>click here to return to the post!</p></Link>
            </article>
                }
        </div>
        </div>
    );
}

export default Deletecomment;