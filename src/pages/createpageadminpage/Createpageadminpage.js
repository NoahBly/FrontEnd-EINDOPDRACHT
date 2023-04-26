import React, { useContext } from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import "../createpageadminpage/createpageadminstyle.css"
import ButtonComponent from "../../context/components/componentbutton/ButtonComponent";
import InputComponent from "../../context/components/componentinput/InputComponent";

function Createpageadminpage() {
    const { isAuthenticated} = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit} = useForm({
        mode: 'onChange',
    });

    async function clickHandler(data) {
        // Verstuur de inloggegevens via een post-request naar de backend
        try {
            // 2. We moeten de keys 'email' en 'password' meesturen (normaliter komen die uit een formulier, maar voor nu gebruiken we ze even hardcoded
            const response = await axios.post('http://localhost:8083/users/pageadmin', {
                username: data.username,
                password: data.password,
                email: data.email,
                profilename: data.profilename,
            });
            // We krijgen een object terug en kijk dan naar waar de token zit:
            console.log('object uit de backend teruggekregen na inloggen', response);

            // We geven de token mee aan de context-functie, zodat de context de rest voor ons afhandeld!

        } catch (e) {
            console.error(e);
        }
    }


    return (
        <div className="outer-container">
            <div className="inner-container">
            <h1>Create Page Admin account</h1>
            {isAuthenticated === false &&
                <form className="article-begin" onSubmit={handleSubmit(clickHandler)}>

                    <InputComponent
                        name={"username"}
                        label={"Username"}
                        validationRules={{
                            required: "username is verplicht",
                        }}
                        inputType={"text"}
                        errors={errors}
                        register={register}
                    />


                    <InputComponent
                        name={"email"}
                        label={"Email"}
                        validationRules={{
                            required: "email is verplicht",
                        }}
                        inputType={"text"}
                        errors={errors}
                        register={register}
                    />


                    <InputComponent
                        name={"password"}
                        label={"Password"}
                        validationRules={{
                            required: "password is verplicht",
                        }}
                        inputType={"text"}
                        errors={errors}
                        register={register}
                    />

                    <InputComponent
                        name={"profilename"}
                        label={"Profilename"}
                        validationRules={{
                            required: "profilename is verplicht",
                        }}
                        inputType={"text"}
                        errors={errors}
                        register={register}
                    />







                    <ButtonComponent type="submit">
                        Verzenden
                    </ButtonComponent>
                </form>
            }
            </div>
        </div>
    );
}

export default Createpageadminpage;