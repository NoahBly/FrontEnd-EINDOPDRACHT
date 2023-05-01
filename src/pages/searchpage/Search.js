import React, { useContext } from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Searchresults from "../searchresultspage/Searchresults";
import {useHistory} from "react-router-dom";
import {ProfileContext} from "../../context/profilecontext/ProfileContext";
import InputComponent from "../../context/components/componentinput/InputComponent";
import ButtonComponent from "../../context/components/componentbutton/ButtonComponent";

function Search() {
    const { isAuthenticated } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit} = useForm({
        mode: 'onChange',
    });
    const history = useHistory();

    const {profilesearchresults, setProfilesearchresults} = useContext(ProfileContext);

   function clickHandler(data){
      setProfilesearchresults(data.profilename);
       history.push("/searchresults");
   }


    return (
        <div>
            <h1>Search</h1>
            {isAuthenticated === true &&
                <form onSubmit={handleSubmit(clickHandler)}>

                    <InputComponent
                    name={"profilename"}
                    label={"Profilename"}
                    validationRules={
                        {required: "profilename is required"}
                    }
                    inputType={"text"}
                    errors={errors}
                    register={register}
                    />

                    <ButtonComponent
                        type={"submit"}>
                    Verzenden
                    </ButtonComponent>

                </form>
            }
        </div>
    );
}

export default Search;