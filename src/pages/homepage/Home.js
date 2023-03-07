import React, { useContext } from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import {Link} from "react-router-dom";
import "../homepage/homestyle.css"

function Home() {
    const { isAuthenticated, logoutFunction } = useContext(AuthContext);

    return (
        <div className="outer-container-2">
        <div className="inner-container-2">
            <h1 className="h1-intro">Home page</h1>
            <p className="p-intro">Welcome at ARTAPP!</p>
            {isAuthenticated === false &&
                <div className="article-section-2">
            <Link to={`/createnormaluserpage`}>
                <p className="p-intro"> Click here to create a normal user account and profile!</p>
            </Link>
            <Link to={`/createcelebrityuserpage`}>
                <p className="p-intro"> Click here to create a celebrity user account and profile!</p>
            </Link>
            <Link to={`/createpageadminuserpage`}>
                <p className="p-intro"> Click here to create a page admin account and profile!</p>
            </Link>
                </div>
            }
            {isAuthenticated === true &&
                <button type="button" onClick={logoutFunction}>
                    Uitloggen
                </button>
            }
        </div>
        </div>
    );
}

export default Home;