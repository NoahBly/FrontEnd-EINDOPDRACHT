import { useState, useEffect } from "react";
import axios from "axios";

function UseCustomhook(url1,url2,url3,url4, token) {

    const [data, setData] = useState({});

useEffect(()=> {

    async function clickHandleraccept() {



        // Verstuur de inloggegevens via een post-request naar de backend
        try {
            if(url1) {
            // 2. We moeten de keys 'email' en 'password' meesturen (normaliter komen die uit een formulier, maar voor nu gebruiken we ze even hardcoded
            const response = await axios.put(url1,  {} , {headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, // is hetzelfde als 'Bearer ' + token,
                }});
            // We krijgen een object terug en kijk dan naar waar de token zit:
            console.log('object uit de backend teruggekregen na posten', response);
            setData(response.status);
            console.log(response.status);
            // We geven de token mee aan de context-functie, zodat de context de rest voor ons afhandeld!
        }

          if(url2) {

                  const response = await axios.post(url2,  {},{ headers: {
                          "Content-Type": "application/json",
                          Authorization: `Bearer ${token}`, // is hetzelfde als 'Bearer ' + token,
                      }});
                  // We krijgen een object terug en kijk dan naar waar de token zit:
                  console.log('object uit de backend teruggekregen na posten', response);
                  setData(response.data);
                  console.log(response.data);


              }

          if(url3) {
              const response = await axios.delete(url3,  { headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${token}`, // is hetzelfde als 'Bearer ' + token,
                  }});
              // We krijgen een object terug
              console.log('object uit de backend teruggekregen na posten', response);
              setData(response.status);
              console.log(response.status);

          }

          if(url4) {
              const response = await axios.get(url4,  { headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${token}`, // is hetzelfde als 'Bearer ' + token,
                  }});
              // We krijgen een object terug
              console.log('object uit de backend teruggekregen na posten', response);
              setData(response.data);
              console.log(response.data);
              // We geven de token mee aan de context-functie, zodat de context de rest voor ons afhandeld!

          }

        } catch (e) {
            console.error(e);
        }

    }
    clickHandleraccept();


    }, [])


    return data;





}

export default UseCustomhook;