import React, {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import {AuthContext} from "../../authenticationcontext/AuthContext";
import {useHistory} from "react-router-dom";
import axios from "axios";

function Draganddropzzz() {
    const {register,handleSubmit} = useForm();
    const [test, setTest] = useState([]);

    const {profileidcurrent,currenttoken} = useContext(AuthContext);
    const history = useHistory();


    function HandleChange(e) {
        const upload = e.target.files[0];
        setTest(upload);
    }

    async function onSubmit(data) {
        console.log(data.file)
        console.log(test);

        const profileidcurrent2 = profileidcurrent;

        let formdata = new FormData();
        formdata.append("file",test);

            // Verstuur de gegevens via een post-request naar de backend


            try {

                const response = await axios.post(`http://localhost:8083/profiles/${profileidcurrent2}/addProfileImage`,
                   formdata , {
                    headers :{
                        "Content-Type" : "multipart/form-data",
                        Authorization: `Bearer ${currenttoken}`, // is hetzelfde als 'Bearer ' + token,
                    }});
                // We krijgen een object terug
                console.log('object uit de backend teruggekregen na posten', response);
                history.push("/profile");
                // We geven de token mee aan de context-functie, zodat de context de rest voor ons afhandeld!

            } catch (e) {
                console.error(e);
            }
        }





    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('file', { required: true })} onChange={HandleChange} type="file"  name="file"/>

            <button>Submit</button>

        </form>
    );


}

export default Draganddropzzz;