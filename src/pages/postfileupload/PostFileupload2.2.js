import React, {useContext, useEffect, useState} from 'react';
import {ProfileContext} from "../../context/profilecontext/ProfileContext";
import useFileUpload from "../../context/components/componentFileUpload/useFileUpload";



function PostFileupload22() {


    const {postidcurrent,uploadfile} = useContext(ProfileContext);
    const postidcurrent2 = postidcurrent;

    const token = localStorage.getItem("token");


    useFileUpload(`http://localhost:8083/posts/step/${postidcurrent2}/addPostImageVideo`,token,`/post/${postidcurrent2}`,uploadfile)


    return null;

}

export default PostFileupload22;