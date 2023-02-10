import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import {Link} from "react-router-dom";

function Home() {
    const { isAuthenticated, logoutFunction } = useContext(AuthContext);

    return (
        <div>
            <h1>Home pagina</h1>
            <p>Welkom op deze website!</p>
            <Link to={`/createnormaluserpage`}>
                <p> klik hier om een normale user account en profiel aan te maken</p>
            </Link>
            {isAuthenticated === true &&
                <button type="button" onClick={logoutFunction}>
                    Uitloggen
                </button>
            }
        </div>
    );
}

export default Home;