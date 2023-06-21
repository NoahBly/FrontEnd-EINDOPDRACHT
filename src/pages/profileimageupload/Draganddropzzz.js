import React, {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import {AuthContext} from "../../context/authenticationcontext/AuthContext";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import useFileUpload from "../../context/components/componentFileUpload/useFileUpload";
import {ProfileContext} from "../../context/profilecontext/ProfileContext";
import {upload} from "@testing-library/user-event/dist/upload";
import InputComponent from "../../context/components/componentinput/InputComponent";
import InputElement from "../../context/components/componentinput/InputComponent";

function Draganddropzzz() {
    const {register,handleSubmit} = useForm();
    const {url} = useParams();
    console.log(url);


    const {profileidcurrent,setUploadfilecontext,linkkeypathProfimage} = useContext(ProfileContext);
    const history = useHistory();

    const token = localStorage.getItem("token");
    const profileidcurrent2 = profileidcurrent;

    // const navigation = [
    //     {
    //         path: '"/profileimageadd/page"',
    //         key: linkkeypathProfimage
    //     },
    //     {
    //         path: '"/postfileadd/page"',
    //         key: linkkeypathPostfile
    //     },
    // ];

    function HandleChange(e) {
        const upload = e.target.files[0];
        setUploadfilecontext(upload);
        console.log(e.target.files[0]);

        return upload;
    }

    function HandleSubmit() {
            console.log(linkkeypathProfimage);
            if(url === "profileimageadd" ) {
                history.push(`/profileimageadd/page`);
            }else if (url === "postfileadd" ) {
                history.push(`/postfileadd/page`);
            }
            // history.push(`${url}/page`);
        //     history.push(`/profileimageadd/page`);
        // history.push(`/postfileadd/page`);
        console.log(url);
    }



//splits dit in delen op
//     async function onSubmit(data) {
//         console.log(data.file)
//         console.log(test);
//
//
//
//         let formdata = new FormData();
//         formdata.append("file",test);
//
//             // Verstuur de gegevens via een post-request naar de backend
//
//
//             try {
//
//                 const response = await axios.post(`http://localhost:8083/profiles/${profileidcurrent2}/addProfileImage`,
//                    formdata , {
//                     headers :{
//                         "Content-Type" : "multipart/form-data",
//                         Authorization: `Bearer ${currenttoken}`, // is hetzelfde als 'Bearer ' + token,
//                     }});
//                 // We krijgen een object terug
//                 console.log('object uit de backend teruggekregen na posten', response);
//                 history.push("/profile");
//                 // We geven de token mee aan de context-functie, zodat de context de rest voor ons afhandeld!
//
//             } catch (e) {
//                 console.error(e);
//             }
//         }








    return(
        <>
        <h1>Start your upload</h1>
        <form onSubmit={handleSubmit(HandleSubmit)}>
            <input {...register('file', { required: true })} onChange={HandleChange} type="file"  name="file"/>

            {/*<InputElement*/}
            {/*    name="file"*/}
            {/*    label="file"*/}
            {/*    validationRules={{*/}
            {/*        required: true,*/}
            {/*    }}*/}
            {/*    inputType="file"*/}
            {/*    register={register}*/}
            {/*    Handlechange={HandleChange}*/}
            {/*/>*/}

            <button type="submit">Submit</button>

        </form>
        </>
    );


}

export default Draganddropzzz;