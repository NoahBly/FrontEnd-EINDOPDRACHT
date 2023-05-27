import {Link, Redirect, Route} from "react-router-dom";
import React, {useContext} from "react";

import {AuthContext} from "../../authenticationcontext/AuthContext";

function Privateroutercomponent ({page,path}) {
    const {isAuthenticated} = useContext(AuthContext);
    if(isAuthenticated) {
        return (
        <Route path={path}>
            {page}

        </Route>
    ) }
    return (

            <Redirect to="/" />

    );
}



export default Privateroutercomponent;