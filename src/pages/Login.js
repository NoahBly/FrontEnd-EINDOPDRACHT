import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function Login() {
    const { isAuthenticated, loginFunction } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit} = useForm({
        mode: 'onChange',
    });

    async function clickHandler(data) {
        // Verstuur de inloggegevens via een post-request naar de backend
        try {
            // 2. We moeten de keys 'email' en 'password' meesturen (normaliter komen die uit een formulier, maar voor nu gebruiken we ze even hardcoded
            const response = await axios.post('http://localhost:8083/authenticate', {
                username: data.username,
                password: data.password,
            });
            // We krijgen een object terug en kijk dan naar waar de token zit:
            console.log('object uit de backend teruggekregen na inloggen', response);

            // We geven de token mee aan de context-functie, zodat de context de rest voor ons afhandeld!
            loginFunction(response.data.jwt);
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <div>
            <h1>Login pagina</h1>
            {isAuthenticated === false &&
                <form onSubmit={handleSubmit(clickHandler)}>
                    <label htmlFor="username-field">Username:</label>
                    <input
                        type="text"
                        id="username-field"
                        {...register("username", {
                            required: "username is required",
                        })}
                    />
                    {errors.username && <p>{errors.username.message}</p>}

                    <label htmlFor="password-field">Password:</label>
                    <input
                        type="text"
                        id="password-field"
                        {...register("password", {
                            required: "password is required",
                        })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                    <button type="submit">
                        Verzenden
                    </button>
                </form>
            }
        </div>
    );
}

export default Login;