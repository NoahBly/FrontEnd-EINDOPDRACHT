// import React, {useContext, useState} from "react";
// import {useForm} from "react-hook-form";
// import {AuthContext} from "../../context/authenticationcontext/AuthContext";
// import {useHistory} from "react-router-dom";
// import axios from "axios";
// import {ProfileContext} from "../../context/profilecontext/ProfileContext";
// import useAcceptrequest from "../../context/components/componentacceptrequest/useAcceptrequest";
// import useFileUpload from "../../context/components/componentFileUpload/useFileUpload";
//
// function Postfileupload2() {
//     const {register,handleSubmit} = useForm();
//     const [test, setTest] = useState([]);
//
//     const {postidcurrent,setUploadfilecontext,linkkeypathPostfile} = useContext(ProfileContext);
//     const history = useHistory();
//     const upload = {};
//
//     const currenttoken = localStorage.getItem("token");
//
//
//     function HandleChange(e) {
//         const upload = e.target.files[0];
//         setUploadfilecontext(upload);
//         // useFileUpload(`http://localhost:8083/profiles/${profileidcurrent2}/addProfileImage`,token,"/profile", e.target.files[0])
//         console.log(e.target.files[0]);
//         return upload;
//     }
//
//     const postidcurrent2 = postidcurrent;
//
//     function HandleSubmit() {
//         console.log(linkkeypathPostfile);
//
//         history.push("/postfileadd/page");
//          // console.log(data.file)
//          // console.log(test);
//          //
//
//          //
//          // let formdata = new FormData();
//          // formdata.append("file", test);
//
//          // Verstuur de gegevens via een post-request naar de backend
//      }
//     //
//     //     try {
//     //
//     //         const response = await axios.post(`http://localhost:8083/posts/step/${postidcurrent2}/addPostImageVideo`,
//     //             formdata , {
//     //                 headers :{
//     //                     "Content-Type" : "multipart/form-data",
//     //                     Authorization: `Bearer ${currenttoken}`, // is hetzelfde als 'Bearer ' + token,
//     //                 }});
//     //         // We krijgen een object terug
//     //         console.log('object uit de backend teruggekregen na posten', response);
//     //         history.push(`/post/${postidcurrent2}`);
//     //
//     //
//     //     } catch (e) {
//     //         console.error(e);
//     //     }
//     // }
//
//
//
//
//
//     return(
//         <>
//         <h1>Start your upload</h1>
//         <form onSubmit={handleSubmit(HandleSubmit)}>
//             <input {...register('file', { required: true })} onChange={HandleChange} type="file"  name="file"/>
//
//             <button>Submit</button>
//
//         </form>
//
//         </>
//     );
//
//
// }
//
// export default Postfileupload2;