import React, { useContext } from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import "../createnormaluserpage/createnormaluserstyle.css"
import ButtonComponent from "../../context/components/componentbutton/ButtonComponent";
import InputComponent from "../../context/components/componentinput/InputComponent";
import useAcceptrequest from "../../context/components/CustomHookacceptrequest/useAcceptrequest";
import {ProfileContext} from "../../context/profilecontext/ProfileContext";
import {useHistory, useParams} from "react-router-dom";

function Createuserpage() {
    const { isAuthenticated} = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit} = useForm({
        mode: 'onChange',
    });
    const { setDataSubmitProfile,profiledatasubmitted} = useContext(ProfileContext);
    const history = useHistory();
    const {urlcreate} = useParams();

   async  function clickHandler(data) {

    console.log(data);
    setDataSubmitProfile(data);
    if(urlcreate === "normalusercreate") {
        history.push("/createnormalpage/upload/data");
    }
    if(urlcreate === "celebrityusercreate"){
        history.push("/createcelebritypage/upload/data");
    }
    if(urlcreate === "pageadminusercreate"){
       history.push("/createpageadminpage/upload/data");
    }
     }


    return (
        <div className="outer-container">
            <div className="inner-container">
            <h1 className="h1-begin">Create normal user account</h1>
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

export default Createuserpage;