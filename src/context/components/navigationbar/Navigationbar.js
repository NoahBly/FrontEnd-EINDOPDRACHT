import React ,{useContext}from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import {AuthContext} from "../../authenticationcontext/AuthContext";
import "../../../styles/Stylesheet.css"

function Navigationbar() {

    const {isAuthenticated, logoutFunction } = useContext(AuthContext);


    return (
        <nav>
            <ul>
                {isAuthenticated === false &&
               <>
                <li>
                    <Link to="/login">
                    Log in!
                </Link>
                </li>
                   <li>
                       <Link to="/">
                           Home
                       </Link>
                   </li>
                    </>
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
                            Profile
                        </Link>
                    </li>
                    </>
                    :
                    <li>
                        <NavLink to="/menu">
                            menu
                        </NavLink>
                    </li>}
            </ul>
        </nav>
    );
}

export default Navigationbar;