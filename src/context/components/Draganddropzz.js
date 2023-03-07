import * as yup from 'yup';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import axios from "axios";
import React, {useContext, Component, useState} from "react";
import {AuthContext} from "../authenticationcontext/AuthContext";
import {useHistory} from "react-router-dom";


function Draganddropz()  {

    const {profileidcurrent} = useContext(AuthContext);
    const history = useHistory();

    const [state, setState] = useState( {
        selectedFile: null
    });

    function fileSelectedHandler( event )  {
        setState({
            selectedFile: event.target.files[0]
            }
        )
        console.log(event.target.files[0]);
    }

    function fileUploadHandler() {
        console.log(state);
        const fd = new FormData();
        fd.append('image', state.selectedFile, state.selectedFile.name);
        console.log(fd);
        const profileidcurrent2 = profileidcurrent;

        async function uploadprofileimage(fd, profileidcurrent) {
            // Verstuur de gegevens via een post-request naar de backend



            try {
                // 2. We moeten de keys 'email' en 'password' meesturen (normaliter komen die uit een formulier, maar voor nu gebruiken we ze even hardcoded
                const response = await axios.post(`http://localhost:8083/profiles/${profileidcurrent2}/addProfileImage`,  {
                        file: fd,

                });
                // We krijgen een object terug en kijk dan naar waar de token zit:
                console.log('object uit de backend teruggekregen na posten', response);
                history.push("/profile");
                // We geven de token mee aan de context-functie, zodat de context de rest voor ons afhandeld!

            } catch (e) {
                console.error(e);
            }
        } uploadprofileimage(fd);

    }

  //
  // function handleFile(event) {
  //     console.log(event.target.files);
  // }
    // function onSubmit(data) {
    //





    //
    // this.handleFile = function (event) {
    //     console.log(event.target.files);
    // }



    return (

        <div className="app">

               <input type="file" name="file" onChange={fileSelectedHandler}/>
                <button onClick={fileUploadHandler}>Upload</button>
        </div>
    );

}


export default Draganddropz;