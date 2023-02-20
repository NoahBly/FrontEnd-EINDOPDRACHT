import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Searchresults from "./Searchresults";
import {useHistory} from "react-router-dom";

function Search() {
    const { isAuthenticated } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit} = useForm({
        mode: 'onChange',
    });
    const history = useHistory();

    const {profilesearchresults, setProfilesearchresults} = useContext(AuthContext);

   function clickHandler(data){
      setProfilesearchresults(data.profilename);
       history.push("/searchresults");
   }


    return (
        <div>
            <h1>Search</h1>
            {isAuthenticated === true &&
                <form onSubmit={handleSubmit(clickHandler)}>
                    <label htmlFor="profilename-field">profilename:</label>
                    <input
                        type="text"
                        id="profilename-field"
                        {...register("profilename", {
                            required: "profilename is required",
                        })}
                    />
                    {errors.profilename && <p>{errors.profilename.message}</p>}

                    <button type="submit">
                        Verzenden
                    </button>
                </form>
            }
        </div>
    );
}

export default Search;