import React, { useContext } from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import "../createcelebuserpage/createcelebuserstyle.css"
import ButtonComponent from "../../context/components/componentbutton/ButtonComponent";
import InputComponent from "../../context/components/componentinput/InputComponent";
import {ProfileContext} from "../../context/profilecontext/ProfileContext";
import {useHistory} from "react-router-dom";

function Createcelebrityuserpage() {
    const { isAuthenticated} = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit} = useForm({
        mode: 'onChange',
    });
    const { setDataSubmitProfile} = useContext(ProfileContext);
    const history = useHistory();


    async function clickHandler(data) {


        console.log(data);
        setDataSubmitProfile(data);
        history.push("/createcelebritypage/upload/data");


        // Verstuur de inloggegevens via een post-request naar de backend
        // try {
        //
        //     const response = await axios.post('http://localhost:8083/users/celebrity', {
        //         username: data.username,
        //         password: data.password,
        //         email: data.email,
        //         profilename: data.profilename,
        //     });
        //     // We krijgen een object terug
        //     console.log('object uit de backend teruggekregen na inloggen', response);
        //
        //
        //
        // } catch (e) {
        //     console.error(e);
        // }
    }


    return (
        <div className="outer-container">
            <div className="inner-container">
            <h1>Create Celebrity account</h1>
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

export default Createcelebrityuserpage;