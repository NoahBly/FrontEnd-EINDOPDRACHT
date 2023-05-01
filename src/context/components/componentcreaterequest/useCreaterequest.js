
import axios from "axios";


export async function clickHandlerCreate(url, token, data, setData) {
    // Verstuur de inloggegevens via een post-request naar de backend
    try {

        const response = await axios.post(url,  {},{ headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // is hetzelfde als 'Bearer ' + token,
            }});
        // We krijgen een object terug en kijk dan naar waar de token zit:
        console.log('object uit de backend teruggekregen na posten', response);
        setData(response.data);
        console.log(response.data);


    } catch (e) {
        console.error(e);
    }
}


