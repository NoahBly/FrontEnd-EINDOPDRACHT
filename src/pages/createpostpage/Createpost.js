import React, { useContext } from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {useHistory} from "react-router-dom";
import "../createpostpage/createpoststyle.css"

function Createpost() {
    const { isAuthenticated } = useContext(AuthContext);
    const {userDetails,currenttoken} = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit} = useForm({
        mode: 'onChange',
    });
    const history = useHistory();
    const {setPostidfunction} = useContext(AuthContext);

    const profileidcurrent2 = userDetails.profile.id;

    async function clickHandler(data,profileidcurrent) {
        // Verstuur de inloggegevens via een post-request naar de backend

        try {
            // 2. We moeten de keys 'email' en 'password' meesturen (normaliter komen die uit een formulier, maar voor nu gebruiken we ze even hardcoded
            const response = await axios.post(`http://localhost:8083/posts/${profileidcurrent2}`, {
                name: data.postname,
            },{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${currenttoken}`, // is hetzelfde als 'Bearer ' + token,
                }});
            // We krijgen een object terug en kijk dan naar waar de token zit:
            console.log('object uit de backend teruggekregen na posten', response);
            setPostidfunction(response.data);
            history.push("/postfile/create");
            // We geven de token mee aan de context-functie, zodat de context de rest voor ons afhandeld!

        } catch (e) {
            console.error(e);
        }
    }


    return (
        <div className="outer-container">
            <div className="inner-container">
                <article className="article-begin">
            <h1>Create your post!</h1>
            {isAuthenticated === true &&
                <form onSubmit={handleSubmit(clickHandler)}>
                    <label htmlFor="postname-field">Postname:</label>
                    <input
                        type="text"
                        id="postname-field"
                        {...register("postname", {
                            required: "postname is required",
                        })}
                    />
                    {errors.postname && <p>{errors.postname.message}</p>}


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