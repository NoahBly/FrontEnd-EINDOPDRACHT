import React, {useContext, useEffect, useState} from 'react';
import {ProfileContext} from "../../context/profilecontext/ProfileContext";
import useFileUpload from "../../context/components/componentFileUpload/useFileUpload";



function ProfileImageupload() {


    const {profileidcurrent,uploadfile} = useContext(ProfileContext);
    const profileidcurrent2 = profileidcurrent;

    const token = localStorage.getItem("token");


    useFileUpload(`http://localhost:8083/profiles/${profileidcurrent2}/addProfileImage`,token,"/profile",uploadfile);


return null;

}

export default ProfileImageupload;