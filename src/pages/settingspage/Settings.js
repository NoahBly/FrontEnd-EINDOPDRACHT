import {Link} from "react-router-dom";
import React from "react";
import "../settingspage/settingsstyle.css"

function Settings() {


    return (
      <div className="outer-container">
          <div className="inner-container">
              <article className="article-begin">
          <h1>Account</h1>
          <Link to={`/userprofileaccount/delete`}> <p>click here to delete your account </p></Link>
          </article>
      </div>
      </div>

    );
}

export default Settings