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
                      <h3>Home</h3>
                    </NavLink>
                </li>
                {/*Is de gebruiker ingelogd? Laat dan de blogposts en uitlog knop zien, en anders alleen de login knop */}
                {isAuthenticated === true
                    ? <>
                        <li>
                            <button type="button" onClick={logoutFunction}>
                               <h3>Uitloggen</h3>
                            </button>
                        </li>
                        <li>
                            <NavLink to="/profile">
                               <h3>Profile</h3>
                            </NavLink>
                        </li>
                        <li>
                        <NavLink to="friendrequests/profile">
                           <h3>Friendrequests</h3>
                        </NavLink>
                        </li>
                        <li>
                            <NavLink to="/followrequests/profile">
                            <h3>Followrequests</h3>
                        </NavLink>
                        </li>
                        <li>
                            <NavLink to="/friendlist/profile">
                                <h3>Friendlist</h3>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/followerslist/profile">
                              <h3>Followerslist</h3>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/followingslist/profile">
                              <h3>Followinglist</h3>
                            </NavLink>
                        </li>


                        <li>
                            <NavLink to="/userprofile/settings">
                               <h3>Settings</h3>
                            </NavLink>
                        </li>

                    </>
                    :
                    <li>
                        <h3> please login and enjoy!</h3>
                    </li>}
            </ul>
        </nav>
        </div>
        </div>
    );
}

export default Menu;