import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {useContext} from "@types/react";
import {AuthContext} from "../AuthContext";

function Navigationbar() {

    const {isAuthenticated, logoutFunction } = useContext(AuthContext);


    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/menu">
                        Menu
                    </NavLink>
                </li>
                {/*Is de gebruiker ingelogd? Laat dan de blogposts en uitlog knop zien, en anders alleen de login knop */}
                {isAuthenticated === true
                    ? <>
                        <li>
                            <button type="button" onClick={logoutFunction}>
                                Uitloggen
                            </button>
                        </li>
                        <li>
                            <NavLink to="/search">
                                search
                            </NavLink>
                        </li>
                    </>
                    :
                    <li>
                        <NavLink to="/search">
                            search
                        </NavLink>
                    </li>}
            </ul>
        </nav>
    );
}

export default Navigationbar;