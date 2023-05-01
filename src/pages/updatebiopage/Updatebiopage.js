import React, { useContext } from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {useHistory, useParams} from "react-router-dom";
import "../updatebiopage/updatebiostyle.css"
import {ProfileContext} from "../../context/profilecontext/ProfileContext";
import InputElement from "../../context/components/componentinput/InputComponent";

function Createpost() {
    const {postId} = useParams();
    const { isAuthenticated,userDetails } = useContext(AuthContext);
    const {postidcurrent} = useContext(ProfileContext);
    const { register, formState: { errors }, handleSubmit} = useForm({
        mode: 'onChange',
    });
    const history = useHistory();

    const profileidcurrent2 = userDetails.profile.id;
    const postidcurrent2 = postidcurrent;
    const token = localStorage.getItem("token");

    async function clickHandler(data,profileidcurrent,postidcurrent) {
        // Verstuur de inloggegevens via een post-request naar de backend

        try {

            const response = await axios.put(`http://localhost:8083/profiles/${userDetails.profile.id}`, {
                bioinformation: data.bio,
            },{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, // is hetzelfde als 'Bearer ' + token,
                }});
            // We krijgen een object terug
            console.log('object uit de backend teruggekregen na posten', response);
            history.push(`/profile`);


        } catch (e) {
            console.error(e);
        }
    }


    return (
        <div className="outer-container">
            <div className="inner-container ">
                <article className="article-begin">
            <h1>Update your Bio here!</h1>
            {isAuthenticated === true &&
                <form onSubmit={handleSubmit(clickHandler)}>
                    <InputElement
                    inputType={"text"}
                    name={"bio"}
                    label={"Bio"}
                    validationRules={{
                        required: "bio is required",
                    }}
                    errors={errors}
                    register={register}
                    />



                    <button type="submit">
                        Verzenden
                    </button>
                </form>
            }
                </article>
            </div>
        </div>
    );
}

export default Createpost;