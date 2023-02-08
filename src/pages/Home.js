import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Home() {
    const { isAuthenticated, logoutFunction } = useContext(AuthContext);

    return (
        <div>
            <h1>Home pagina</h1>
            <p>Welkom op deze website!</p>
            {isAuthenticated === true &&
                <button type="button" onClick={logoutFunction}>
                    Uitloggen
                </button>
            }
        </div>
    );
}

export default Home;