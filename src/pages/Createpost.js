import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function Createpost() {
    const { isAuthenticated, loginFunction } = useContext(AuthContext);
    const {profileid} = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit} = useForm({
        mode: 'onChange',
    });

    async function clickHandler(data,{profileid}) {
        // Verstuur de inloggegevens via een post-request naar de backend
        try {
            // 2. We moeten de keys 'email' en 'password' meesturen (normaliter komen die uit een formulier, maar voor nu gebruiken we ze even hardcoded
            const response = await axios.post(`http://localhost:8083/posts/${profileid}`, {
                name: data.postname,
            });
            // We krijgen een object terug en kijk dan naar waar de token zit:
            console.log('object uit de backend teruggekregen na posten', response);

            // We geven de token mee aan de context-functie, zodat de context de rest voor ons afhandeld!

        } catch (e) {
            console.error(e);
        }
    }


    return (
        <div>
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
        </div>
    );
}

export default Createpost;