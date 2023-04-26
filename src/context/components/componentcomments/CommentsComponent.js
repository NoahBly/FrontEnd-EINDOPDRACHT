import {Link} from "react-router-dom";
import React from "react";

function Comments ({comment,children, commentmaker, profileid,profilecurrent}) {
    return (
<li key={`${comment.id}-${comment.name}`}>
    <p>{comment.commentmaker.name} - </p>   <p> {comment.comment}</p>
    {{commentmaker} === {profilecurrent} || {profileid} === {profilecurrent} ?
        <Link to={`/commentdelete/delete/${comment.id}`}>
            {children}
        </Link>: <p> </p>}

</li>
    );
}



export default Comments;