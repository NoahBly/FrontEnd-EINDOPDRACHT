import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import "../menupage/menustyle.css"

function Menu() {

    const {isAuthenticated, logoutFunction } = useContext(AuthContext);


    return (
        <div className="outer-container-6">
            <div className="inner-container-6">


        <nav className="article-section-6box">
            <ul className="article-section-6">
                <li>
                    <NavLink to="/">
                      <h1>Home</h1>
                    </NavLink>
                </li>
                {/*Is de gebruiker ingelogd? Laat dan de blogposts en uitlog knop zien, en anders alleen de login knop */}
                {isAuthenticated === true
                    ? <>
                        <li>
                            <button type="button" onClick={logoutFunction}>
                               <h1>Uitloggen</h1>
                            </button>
                        </li>
                        <li>
                            <NavLink to="/profile">
                               <h1>Profile</h1>
                            </NavLink>
                        </li>
                        <li>
                        <NavLink to="friendrequests/profile">
                           <h1>Friendrequests</h1>
                        </NavLink>
                        </li>
                        <li>
                            <NavLink to="/followrequests/profile">
                            <h1>Followrequests</h1>
                        </NavLink>
                        </li>
                        <li>
                            <NavLink to="/friendlist/profile">
                                <h1>Friendlist</h1>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/followerslist/profile">
                              <h1>Followerslist</h1>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/followingslist/profile">
                              <h1>Followinglist</h1>
                            </NavLink>
                        </li>


                        <li>
                            <NavLink to="/userprofile/settings">
                               <h1>Settings</h1>
                            </NavLink>
                        </li>

                    </>
                    :
                    <li>
                        <h1> please login and enjoy!</h1>
                    </li>}
            </ul>
        </nav>
        </div>
        </div>
    );
}

export default Menu;