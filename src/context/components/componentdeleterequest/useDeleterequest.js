import axios from "axios";

// function useAcceptrequest (url)  {
//     const [data, setData] = useState(null);
export async function clickHandlerdelete(url, token, data, setData ) {
    // Verstuur de inloggegevens via een post-request naar de backend
    try {
        // 2. We moeten de keys 'email' en 'password' meesturen (normaliter komen die uit een formulier, maar voor nu gebruiken we ze even hardcoded
        const response = await axios.delete(url,  { headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // is hetzelfde als 'Bearer ' + token,
            }});
        // We krijgen een object terug en kijk dan naar waar de token zit:
        console.log('object uit de backend teruggekregen na posten', response);
        setData(response.status);
        console.log(response.status);
        // We geven de token mee aan de context-functie, zodat de context de rest voor ons afhandeld!

    } catch (e) {
        console.error(e);
    }
}

