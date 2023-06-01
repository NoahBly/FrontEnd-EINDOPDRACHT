import React, { useContext } from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import "../loginpage/loginstyle.css"
import InputComponent from "../../context/components/componentinput/InputComponent";

function Login() {
    const { isAuthenticated, loginFunction, setTokenfunction } = useContext(AuthContext);
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
            console.log(response.data.jwt);
            setTokenfunction(response.data.jwt);
            // We geven de token mee aan de context-functie, zodat de context de rest voor ons afhandeld!
            loginFunction(response.data.jwt);
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <div className="outer-container">
            <div className="inner-container">
                <div className="article-begin">
            <h1 className="h1-begin ">Login pagina</h1>
            {isAuthenticated === false &&
                <form onSubmit={handleSubmit(clickHandler)}>


                    <InputComponent
                        name={"username"}
                        label={"Username"}
                        validationRules={{
                            required: "Username is verplicht",
                        }}
                        inputType={"text"}
                        errors={errors}
                        register={register}
                    />


                    <InputComponent
                        name={"password"}
                        label={"Password"}
                        validationRules={{
                            required: "Password is verplicht",
                        }}
                        inputType={"text"}
                        errors={errors}
                        register={register}
                    />


                    <button type="submit">
                        Verzenden
                    </button>
                </form>
            }
                </div>
            </div>
        </div>
    );
}

export default Login;