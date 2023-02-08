import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Searchresults from "./Searchresults";

function Search() {
    const { isAuthenticated } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit} = useForm({
        mode: 'onChange',
    });



   function clickHandler(data){
       Searchresults(data);
   }


    return (
        <div>
            <h1>Search</h1>
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

                    <button type="submit">
                        Verzenden
                    </button>
                </form>
            }
        </div>
    );
}

export default Search;