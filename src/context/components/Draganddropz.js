import * as yup from 'yup';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import axios from "axios";
import {useContext} from "react";
import {AuthContext} from "../AuthContext";
import {useHistory} from "react-router-dom";

const schema = yup.object().shape({
    files: yup.mixed().test('required', 'Please select a file', value => {
        return value && value.length;
    })
})

function Draganddropz () {

    const {profileidcurrent} = useContext(AuthContext);

    const history = useHistory();

    const profileidcurrent2 = profileidcurrent;

    const {
        register,
        watch,
        handleSubmit,
        formState : {errors}}
        = useForm({
        resolver: yupResolver(schema),
    })


    function onSubmit (data) {

        if(data.files.length > 0) {

        async function uploadprofileimage(data , profileidcurrent) {
            // Verstuur de inloggegevens via een post-request naar de backend

            console.log(data);

            try {
                // 2. We moeten de keys 'email' en 'password' meesturen (normaliter komen die uit een formulier, maar voor nu gebruiken we ze even hardcoded
                const response = await axios.post(`http://localhost:8083/posts/${profileidcurrent2}/addPostImageVideo`,null, { params: {
                file: data.files[0],
                }});
                // We krijgen een object terug en kijk dan naar waar de token zit:
                console.log('object uit de backend teruggekregen na posten', response);
                history.push("/profile");
                // We geven de token mee aan de context-functie, zodat de context de rest voor ons afhandeld!

            } catch (e) {
                console.error(e);
            }
        }uploadprofileimage();
    }
    }


    return (

        <div className="container">
<form onSubmit={handleSubmit(onSubmit)}>
    {!watch('files') || watch('files').length === 0 ? (
    <div>
        <input type="file" id="fileupload" {...register('files')} style={{display: 'none'}}/>
        <label htmlFor="fileupload" style={{cursor: 'pointer'}}>
            Select file
        </label>
    </div>
    ) : (<strong>{watch('files')[0].name}</strong>)}
<button type="submit" className="btn">
    Submit
</button>
    {errors.files && <div className='error'> {errors.files.message}</div>}
</form>

    </div>

        );


    }
export default Draganddropz;