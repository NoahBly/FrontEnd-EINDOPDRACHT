import axios from "axios";


export async function clickHandlerdelete(url, token, data, setData ) {

    try {

        const response = await axios.delete(url,  { headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // is hetzelfde als 'Bearer ' + token,
            }});
        // We krijgen een object terug
        console.log('object uit de backend teruggekregen na posten', response);
        setData(response.status);
        console.log(response.status);


    } catch (e) {
        console.error(e);
    }
}

