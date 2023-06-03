import React, { useContext } from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {useHistory} from "react-router-dom";
import "../createpostpage/createpoststyle.css"
import {ProfileContext} from "../../context/profilecontext/ProfileContext";
import ButtonComponent from "../../context/components/componentbutton/ButtonComponent";
import InputComponent from "../../context/components/componentinput/InputComponent";

function Createpost() {
    const { isAuthenticated,userDetails} = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit} = useForm({
        mode: 'onChange',
    });
    const history = useHistory();
    const {setPostData} = useContext(ProfileContext);

    const profileidcurrent2 = userDetails.profile.id;

    const currenttoken= localStorage.getItem("token");

    async function clickHandler(data) {
        // Verstuur de inloggegevens via een post-request naar de backend
        console.log(data);
        setPostData(data);
        history.push("/postadd/page");

        // try {
        //
        //     const response = await axios.post(`http://localhost:8083/posts/${profileidcurrent2}`, {
        //         name: data.postname,
        //     },{
        //         headers: {
        //             "Content-Type": "application/json",
        //             Authorization: `Bearer ${currenttoken}`, // is hetzelfde als 'Bearer ' + token,
        //         }});
        //     // We krijgen een object terug
        //     console.log('object uit de backend teruggekregen na posten', response);
        //     setPostidfunction(response.data);
        //     history.push("/postfile/create");
        //
        //
        // } catch (e) {
        //     console.error(e);
        // }
    }


    return (
        <div className="outer-container">
            <div className="inner-container">
                <article className="article-begin">
            <h1>Create your post!</h1>
            {isAuthenticated === true &&
                <form onSubmit={handleSubmit(clickHandler)}>

                    <InputComponent
                        name={"postname"}
                        label={"Postname"}
                        validationRules={{
                            required: "postname is required",
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
                </article>
            </div>
        </div>
    );
}

export default Createpost;