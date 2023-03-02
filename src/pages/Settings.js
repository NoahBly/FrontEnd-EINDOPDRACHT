import {Link} from "react-router-dom";
import React from "react";

function Settings() {


    return (
      <div>
          <h1>Account</h1>
          <Link to={`/userprofileaccount/delete`}> <p>click here to delete your account </p></Link>
      </div>

    );
}

export default Settings