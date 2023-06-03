import React, { useContext } from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {useHistory} from "react-router-dom";
import "../createpostpage/createpoststyle.css"
import {ProfileContext} from "../../context/profilecontext/ProfileContext";
import ButtonComponent from "../../context/components/componentbutton/ButtonComponent";
import InputComponent from "../../context/components/componentinput/InputComponent";
import useAcceptrequest from "../../context/components/componentacceptrequest/useAcceptrequest";

function Createpostpage() {
    const {userDetails} = useContext(AuthContext);

    const {postdata} = useContext(ProfileContext);

    const profileidcurrent2 = userDetails.profile.id;

    const currenttoken= localStorage.getItem("token");

   useAcceptrequest(null,null,null,null,null,null,null,`http://localhost:8083/posts/${profileidcurrent2}`,"/postfile/create",null,null,postdata,currenttoken)


    return null;
}

export default Createpostpage;