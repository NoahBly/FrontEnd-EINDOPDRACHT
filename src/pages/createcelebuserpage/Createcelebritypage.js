import React, { useContext } from 'react';
import { AuthContext } from '../../context/authenticationcontext/AuthContext';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import "../createnormaluserpage/createnormaluserstyle.css"
import ButtonComponent from "../../context/components/componentbutton/ButtonComponent";
import InputComponent from "../../context/components/componentinput/InputComponent";
import useAcceptrequest from "../../context/components/componentacceptrequest/useAcceptrequest";
import {ProfileContext} from "../../context/profilecontext/ProfileContext";
import {Link, Redirect, useHistory} from "react-router-dom";

function Createcelebritypage() {

    const {profiledatasubmitted} = useContext(ProfileContext);


    console.log(profiledatasubmitted);

    const response = useAcceptrequest(null,null,null,null,null,null,'http://localhost:8083/users/celebrity',null,null,null,null,profiledatasubmitted,null)

    console.log(response);


    return  (
        <div>
        <Link to={`/`}>
            <h2 className="p-intro"> Click here to return to Home page to login and start!</h2>
        </Link>

    </div>
    );
}

export default Createcelebritypage;