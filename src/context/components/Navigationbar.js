import React ,{useContext}from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import {AuthContext} from "../AuthContext";
import "../../styles/Stylesheet.css"

function Navigationbar() {

    const {isAuthenticated, logoutFunction } = useContext(AuthContext);


    return (
        <nav>
            <ul>
                {isAuthenticated === false &&
                <li>
                    <Link to="/login">
                    Inloggen
                </Link>
                </li>
                }
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

                        <li>
                        <NavLink to="/menu">
                            Menu
                        </NavLink>
                    </li>
                        <li>
                        <Link to="/profile">
                            Profiel
                        </Link>
                    </li>
                    </>
                    :
                    <li>
                        <NavLink to="/menu">
                            search
                        </NavLink>
                    </li>}
            </ul>
        </nav>
    );
}

export default Navigationbar;