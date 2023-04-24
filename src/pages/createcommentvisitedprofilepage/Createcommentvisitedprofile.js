import React, { useContext } from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {useHistory, useParams} from "react-router-dom";
import "../createcommentvisitedprofilepage/createcommentvisitedprofilestyle.css"

function Createpost() {
    const {post2Id} = useParams();
    const { isAuthenticated } = useContext(AuthContext);
    const {userDetails} = useContext(AuthContext);
    const {visitedpostidcurrent,currenttoken} = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit} = useForm({
        mode: 'onChange',
    });
    const history = useHistory();

    const profileidmaker = userDetails.profile.id;
    const postidcurrent2 = visitedpostidcurrent;

    async function clickHandler(data,profileidcurrent,postidcurrent) {
        // Verstuur de inloggegevens via een post-request naar de backend

        try {
            // 2. We moeten de keys 'email' en 'password' meesturen (normaliter komen die uit een formulier, maar voor nu gebruiken we ze even hardcoded
            const response = await axios.post(`http://localhost:8083/comments/post/${postidcurrent2}/profile/${profileidmaker}`, {
                comment: data.comment,
            },{
                headers: {
                    "Content-Type": "application/json",
                        Authorization: `Bearer ${currenttoken}`, // is hetzelfde als 'Bearer ' + token,
                }});
            // We krijgen een object terug en kijk dan naar waar de token zit:
            console.log('object uit de backend teruggekregen na posten', response);
            history.push(`/searchresultsposts/profile/${postidcurrent2}`);
            // We geven de token mee aan de context-functie, zodat de context de rest voor ons afhandeld!

        } catch (e) {
            console.error(e);
        }
    }


    return (
        <div className="outer-container">
            <div className="inner-container">
                <article className="article-begin">
            <h1>Create your comment!</h1>
            {isAuthenticated === true &&
                <form onSubmit={handleSubmit(clickHandler)}>
                    <label htmlFor="comment-field">Comment:</label>
                    <input
                        type="text"
                        id="comment-field"
                        {...register("comment", {
                            required: "comment is required",
                        })}
                    />
                    {errors.comment && <p>{errors.comment.message}</p>}


                    <button type="submit">
                        Verzenden
                    </button>
                </form>
            }
                </article>
            </div>
        </div>
    );
}

export default Createpost;