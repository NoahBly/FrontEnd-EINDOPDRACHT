import {Link} from "react-router-dom";
import React from "react";

function Posts({post,to,classname,children}) {

    return (
<li key={`${post.id}-${post.name}`}>
    <Link to={`/post/${post.id}`}>
        <h1 className={classname}>{post.name}</h1>
    </Link>


</li>
    );
}

export default Posts;