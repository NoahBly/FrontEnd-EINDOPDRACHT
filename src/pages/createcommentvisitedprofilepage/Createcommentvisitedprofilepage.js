import React, { useContext } from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {useHistory, useParams} from "react-router-dom";
import "../createcommentpage/createcommentstyle.css"
import {ProfileContext} from "../../context/profilecontext/ProfileContext";
import ButtonComponent from "../../context/components/componentbutton/ButtonComponent";
import InputComponent from "../../context/components/componentinput/InputComponent";
import useAcceptrequest from "../../context/components/componentacceptrequest/useAcceptrequest";

function Createcommentvisitedprofilepage() {
    const {postId} = useParams();
    const { isAuthenticated,userDetails } = useContext(AuthContext);
    const {postidcurrent,commentdata2} = useContext(ProfileContext);
    const { register, formState: { errors }, handleSubmit} = useForm({
        mode: 'onChange',
    });


    const profileidcurrent2 = userDetails.profile.id;
    const postidcurrent2 = postidcurrent;

    const currenttoken = localStorage.getItem("token");


    useAcceptrequest(null,null,null,null,`http://localhost:8083/comments/post/${postidcurrent2}/profile/${profileidcurrent2}`,`/searchresultsposts/profile/${postidcurrent2}`,null,null,null,null,null,commentdata2,currenttoken)



    return null
        ;
}

export default Createcommentvisitedprofilepage;