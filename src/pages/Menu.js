import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {useContext} from "@types/react";
import {AuthContext} from "../AuthContext";

function Menu() {

    const {isAuthenticated, logoutFunction } = useContext(AuthContext);


    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/home">
                        Home
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
                            <NavLink to="/profile">
                                Profile
                            </NavLink>
                        </li>
                        <li>
                        <NavLink to="/friendrequests">
                            Friendrequests
                        </NavLink>
                        </li>
                        <li>
                            <NavLink to="/followrequests">
                            Followrequests
                        </NavLink>
                        </li>
                        <li>
                            <NavLink to="/settings">
                                Settings
                            </NavLink>
                        </li>

                    </>
                    :
                    <li>
                        <p> please login and enjoy!</p>
                    </li>}
            </ul>
        </nav>
    );
}

export default Menu;