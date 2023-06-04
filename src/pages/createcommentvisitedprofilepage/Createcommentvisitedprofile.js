import React, { useContext } from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {useHistory, useParams} from "react-router-dom";
import "../createcommentvisitedprofilepage/createcommentvisitedprofilestyle.css"
import {ProfileContext} from "../../context/profilecontext/ProfileContext";
import ButtonComponent from "../../context/components/componentbutton/ButtonComponent";
import InputComponent from "../../context/components/componentinput/InputComponent";

function Createpost() {
    const {post2Id} = useParams();
    const { isAuthenticated,userDetails,currenttoken } = useContext(AuthContext);
    const {visitedpostidcurrent,setCommentData2} = useContext(ProfileContext);
    const { register, formState: { errors }, handleSubmit} = useForm({
        mode: 'onChange',
    });

    const history = useHistory();

    const profileidmaker = userDetails.profile.id;
    const postidcurrent2 = visitedpostidcurrent;

    async function clickHandler(data,profileidcurrent,postidcurrent) {

        // Verstuur de inloggegevens via een post-request naar de backend
        console.log(data);
        setCommentData2(data);
        history.push("/commentadding/visitedpage");

        // Verstuur de inloggegevens via een post-request naar de backend
        //
        // try {
        //
        //     const response = await axios.post(`http://localhost:8083/comments/post/${postidcurrent2}/profile/${profileidmaker}`, {
        //         comment: data.comment,
        //     },{
        //         headers: {
        //             "Content-Type": "application/json",
        //                 Authorization: `Bearer ${currenttoken}`, // is hetzelfde als 'Bearer ' + token,
        //         }});
        //     // We krijgen een object terug
        //     console.log('object uit de backend teruggekregen na posten', response);
        //     history.push(`/searchresultsposts/profile/${postidcurrent2}`);
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
            <h1>Create your comment!</h1>
            {isAuthenticated === true &&
                <form onSubmit={handleSubmit(clickHandler)}>
                    <label htmlFor="comment-field">Comment:</label>

                    <InputComponent
                        name={"comment"}
                        label={"Comment"}
                        validationRules={{
                            required: "comment is required",
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