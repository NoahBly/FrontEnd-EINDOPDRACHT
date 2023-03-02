import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {useHistory, useParams} from "react-router-dom";

function Createpost() {
    const {postId} = useParams();
    const { isAuthenticated } = useContext(AuthContext);
    const {userDetails} = useContext(AuthContext);
    const {postidcurrent} = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit} = useForm({
        mode: 'onChange',
    });
    const history = useHistory();

    const profileidcurrent2 = userDetails.profile.id;
    const postidcurrent2 = postidcurrent;

    async function clickHandler(data,profileidcurrent,postidcurrent) {
        // Verstuur de inloggegevens via een post-request naar de backend

        try {
            // 2. We moeten de keys 'email' en 'password' meesturen (normaliter komen die uit een formulier, maar voor nu gebruiken we ze even hardcoded
            const response = await axios.put(`http://localhost:8083/profiles/${userDetails.profile.id}`, {
                bioinformation: data.bio,
            });
            // We krijgen een object terug en kijk dan naar waar de token zit:
            console.log('object uit de backend teruggekregen na posten', response);
            history.push(`/profile`);
            // We geven de token mee aan de context-functie, zodat de context de rest voor ons afhandeld!

        } catch (e) {
            console.error(e);
        }
    }


    return (
        <div>
            <h1>Update your Bio here!</h1>
            {isAuthenticated === true &&
                <form onSubmit={handleSubmit(clickHandler)}>
                    <label htmlFor="bio-field">Bio:</label>
                    <input
                        type="text"
                        id="bio-field"
                        {...register("comment", {
                            required: "bio is required",
                        })}
                    />
                    {errors.comment && <p>{errors.comment.message}</p>}


                    <button type="submit">
                        Verzenden
                    </button>
                </form>
            }
        </div>
    );
}

export default Createpost;