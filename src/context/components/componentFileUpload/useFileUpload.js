import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import {AuthContext} from "../../authenticationcontext/AuthContext";

function UseFileUpload(url, token, url2, test, setTest) {

    const [data2, setData2] = useState({});

    const {register,handleSubmit} = useForm();

    const {profileidcurrent} = useContext(AuthContext);
    const history = useHistory();



    useEffect(()=> {


        async function onSubmit(data) {

            console.log(test);

            const profileidcurrent2 = profileidcurrent;

            let formdata = new FormData();
            formdata.append("file",test);

            // Verstuur de gegevens via een post-request naar de backend


            try {

                const response = await axios.post(url,
                    formdata , {
                        headers :{
                            "Content-Type" : "multipart/form-data",
                            Authorization: `Bearer ${token}`, // is hetzelfde als 'Bearer ' + token,
                        }});
                // We krijgen een object terug
                console.log('object uit de backend teruggekregen na posten', response);
                setData2(response);
                history.push(url2);
                // We geven de token mee aan de context-functie, zodat de context de rest voor ons afhandeld!

            } catch (e) {
                console.error(e);
            }
        }


        onSubmit();


    }, [])


    return data2;





}

export default UseFileUpload;