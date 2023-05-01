import React, {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import {AuthContext} from "../../authenticationcontext/AuthContext";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {ProfileContext} from "../../profilecontext/ProfileContext";

function Draganddropzzz() {
    const {register,handleSubmit} = useForm();
    const [test, setTest] = useState([]);

    const {postidcurrent} = useContext(ProfileContext);
    const history = useHistory();


    function HandleChange(e) {
        const upload = e.target.files[0];
        setTest(upload);
    }

    const currenttoken = localStorage.getItem("token");

    async function onSubmit(data) {
        console.log(data.file)
        console.log(test);

        const postidcurrent2 = postidcurrent;

        let formdata = new FormData();
        formdata.append("file",test);

        // Verstuur de gegevens via een post-request naar de backend


        try {

            const response = await axios.post(`http://localhost:8083/posts/step/${postidcurrent2}/addPostImageVideo`,
                formdata , {
                    headers :{
                        "Content-Type" : "multipart/form-data",
                        Authorization: `Bearer ${currenttoken}`, // is hetzelfde als 'Bearer ' + token,
                    }});
            // We krijgen een object terug
            console.log('object uit de backend teruggekregen na posten', response);
            history.push(`/post/${postidcurrent2}`);


        } catch (e) {
            console.error(e);
        }
    }





    return(
        <>
        <h1>Upload Image or video for your post!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('file', { required: true })} onChange={HandleChange} type="file"  name="file"/>

            <button>Submit</button>

        </form>

        </>
    );


}

export default Draganddropzzz;