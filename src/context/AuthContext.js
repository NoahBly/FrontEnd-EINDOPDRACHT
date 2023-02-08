import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });

    useEffect(() => {
        console.log('De context is zojuist opnieuw opgestart!');
        // is er een token?
        const token = localStorage.getItem('token');
        console.log(token);

        // als er een token is, is deze ook geldig? Tip: hier schrijf je een aparte validatie-functie voor
        if (token) {
            // zo JA: wat is de ID van deze ingelogde gebruiker? Hiervoor decoden we de token
            const decodedToken = jwtDecode(token);
            // We geven de ID en de token mee aan de fetchUserData functie
            fetchUserData(decodedToken.sub, token);
        } else {
            // Zo nee: doe niks, laat de state leeg!
            setAuth({
                ...auth,
                status: 'done',
            });
        }
    }, []); // <----- [] betekent MOUNT effect, wordt uitgevoerd op refresh en 1e opstart

    // Deze functie staat hier netjes te wachten tot hij aangeroepen wordt (door useEffect OF login)
    async function fetchUserData(id, token) {
        try {
            const response = await axios.get(`http://localhost:3000/600/users/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, // is hetzelfde als 'Bearer ' + token,
                }
            });
            // De gebruikersgegevens staan op response.data
            console.log(response.data);

            // We gebruiken alle info en zetten die in de context en de status op DONE
            setAuth({
                ...auth,
                isAuth: true,
                status: 'done',
                user: {
                    email: response.data.email,
                    id: response.data.id,
                    // allemaal andere informatie van de gebruiker in de state zetten!
                },
            })
        } catch (e) {
            console.error(e);
            // als het request mis ging, willen we uiteindelijk de status ook op DONE zetten. Doe je dat zelf nog even?
        }
    }

    const history = useHistory();

    function login(token) {
        console.log(token);
        // 1. Token opslaan in de localStorage
        localStorage.setItem('token', token);
        // 2. Token decoden om te kijken wie deze gebruiker is
        const decodedToken = jwtDecode(token);
        console.log('decoded token:', decodedToken);

        // ----  Indien nodig (als backend dit niet meestuurde) nieuwe data opvragen van gebruiker:
        fetchUserData(decodedToken.sub, token);
        // de fetchUserData functie zorgt ervoor dat de juiste gegevens in de Context terecht komen

        console.log('Gebruiker is ingelogd!');
        history.push('/profile');
    }

    function logout() {
        setAuth({
            ...auth,
            isAuth: false,
            user: null,
        });

        localStorage.clear();
        console.log('Gebruiker is uitgelogd!');
        history.push('/');
    }

    const contextData = {
        banaan: 'geel', // ---> onveranderlijke "statische" data
        isAuthenticated: auth.isAuth, // ---> veranderlijke "dynamische" state data
        userDetails: auth.user, // ---> veranderlijke "dynamische" state data
        loginFunction: login, // ---> functies om data te kunnen aanpassen
        logoutFunction: logout, // ---> functies om data te kunnen aanpassen
    };

    return (
        <AuthContext.Provider value={contextData}>
            {auth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;