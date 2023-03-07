import React, {useContext, useState} from 'react';
import { AuthContext } from '../context/authenticationcontext/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {useHistory} from "react-router-dom";
import Draganddrop from "../context/components/Draganddrop";

function Uploadprofileimage() {
    const { isAuthenticated } = useContext(AuthContext);
    const {profileidcurrent} = useContext(AuthContext);

    const history = useHistory();

    const profileidcurrent2 = profileidcurrent;

    const [newUserInfo, setNewUserInfo] = useState({
        profileImages: []
    });

    const updateUploadedFiles = (files) =>
        setNewUserInfo({ ...newUserInfo, profileImages: files });

    const handleSubmit = (event) => {
        event.preventDefault();

        async function uploadprofileimage(data, profileidcurrent) {
            // Verstuur de inloggegevens via een post-request naar de backend

            console.log(data);

            try {
                // 2. We moeten de keys 'email' en 'password' meesturen (normaliter komen die uit een formulier, maar voor nu gebruiken we ze even hardcoded
                const response = await axios.post(`http://localhost:8083/profiles/${profileidcurrent2}/addProfileImage`, {
                    file: data.profileImages,
                });
                // We krijgen een object terug en kijk dan naar waar de token zit:
                console.log('object uit de backend teruggekregen na posten', response);
                history.push("/profile");
                // We geven de token mee aan de context-functie, zodat de context de rest voor ons afhandeld!

            } catch (e) {
                console.error(e);
            }
            uploadprofileimage();
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Draganddrop
                    accept=".jpg,.png,.jpeg"
                    label="Profile Image(s)"
                    multiple
                    updateFilesCb={updateUploadedFiles}
                />
                <button type="submit">Upload profile image</button>
            </form>
        </div>
    );
}


export default Uploadprofileimage;