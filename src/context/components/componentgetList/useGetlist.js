//
// import axios from "axios";
//
//     export async function clickHandler(url, token, data, setData) {
//
//         try {
//
//             const response = await axios.get(url,  { headers: {
//                 "Content-Type": "application/json",
//                     Authorization: `Bearer ${token}`, // is hetzelfde als 'Bearer ' + token,
//             }});
//             // We krijgen een object terug
//             console.log('object uit de backend teruggekregen na posten', response);
//             setData(response.data);
//             console.log(response.data);
//             // We geven de token mee aan de context-functie, zodat de context de rest voor ons afhandeld!
//
//         } catch (e) {
//             console.error(e);
//         }
//     }
//
//
