import {useState, useEffect, useContext} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {ProfileContext} from "../../profilecontext/ProfileContext";

function UseCustomhook(url1,url2,url3,url4,url5, locationurl5, url6, url7, locationurl7,url8, dataurl8, data2, token) {

    const [data, setData] = useState({});
    const {setPostidfunction} = useContext(ProfileContext);
    const history = useHistory();

    useEffect(() => {
        const cancelToken = axios.CancelToken;
        const source = cancelToken.source();


        // const controller = new AbortController();
        // const signal = controller.signal;

        async function clickHandleraccept() {


            // Verstuur de inloggegevens via een post-request naar de backend
            try {
                if (url1) {
                    // 2. We moeten de keys 'email' en 'password' meesturen (normaliter komen die uit een formulier, maar voor nu gebruiken we ze even hardcoded
                    const response = await axios.put(url1, {}, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`, // is hetzelfde als 'Bearer ' + token,
                        }
                    });
                    // We krijgen een object terug en kijk dan naar waar de token zit:
                    console.log('object uit de backend teruggekregen na posten', response);
                    setData(response.status);
                    console.log(response.status);
                    // We geven de token mee aan de context-functie, zodat de context de rest voor ons afhandeld!
                }

                if (url2) {

                    const response = await axios.post(url2, {}, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`, // is hetzelfde als 'Bearer ' + token,
                        }
                    });
                    // We krijgen een object terug en kijk dan naar waar de token zit:
                    console.log('object uit de backend teruggekregen na posten', response);
                    setData(response.data);
                    console.log(response.data);


                }

                if (url3) {
                    const response = await axios.delete(url3, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`, // is hetzelfde als 'Bearer ' + token,
                        }
                    });
                    // We krijgen een object terug
                    console.log('object uit de backend teruggekregen na posten', response);
                    setData(response.status);
                    console.log(response.status);

                }

                if (url4) {
                    const response = await axios.get(url4, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`, // is hetzelfde als 'Bearer ' + token,
                        }
                    });
                    // We krijgen een object terug
                    console.log('object uit de backend teruggekregen na posten', response);
                    setData(response.data);
                    console.log(response.data);
                    // We geven de token mee aan de context-functie, zodat de context de rest voor ons afhandeld!

                }

                if (url5) {
                    const response = await axios.post(url5, {
                        comment: data2.comment,
                    }, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`, // is hetzelfde als 'Bearer ' + token,
                        }
                    });
                    // We krijgen een object terug
                    console.log('object uit de backend teruggekregen na posten', response);
                    setData(response);
                    history.push(locationurl5);

                }

                if (url6) {
                    const response = await axios.post(url6, {
                        username: data2.username,
                        password: data2.password,
                        email: data2.email,
                        profilename: data2.profilename,
                    }

                    );
                    // We krijgen een object terug
                    console.log('object uit de backend teruggekregen na inloggen', response);
                    setData(response);


                }

                if (url7) {
                    const response = await axios.post(url7, {
                        name: data2.postname,
                    }, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`, // is hetzelfde als 'Bearer ' + token,
                        }
                    });
                    // We krijgen een object terug
                    console.log('object uit de backend teruggekregen na posten', response);
                    setData(response);
                    setPostidfunction(response.data);
                    history.push(locationurl7);
                }

                if(url8) {
                            const response = await axios.post(url8, {
                                username: dataurl8.username,
                                password: dataurl8.password,
                                email: dataurl8.email,
                                profilename: dataurl8.profilename,
                            });
                            // We krijgen een object terug
                            console.log('object uit de backend teruggekregen na inloggen', response);
                            setData(response);

                }

            } catch (e) {
                console.error(e);
            }

        }
        clickHandleraccept();


        return () => {
            source.cancel("axios request cancelled");
        };
        // return () => {controller.abort();};

    }, [])


    return data;




}

export default UseCustomhook;