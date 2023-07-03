import {Link} from "react-router-dom";
import React from "react";

function Lists ({comment,request,profile, post, children, commentmaker, profileid,profilecurrent, url1,url2,setTest,test}) {
    return (
<li >
    {comment &&
<>
   <p>{comment.commentmaker.name} - </p>   <p> {comment.comment}</p>
    {commentmaker && commentmaker === profilecurrent || profileid === profilecurrent ?
        <Link to={url1}>
            {children}
        </Link>: <p> </p>}
</>
}

    {profile &&
  <>  <p><strong> {profile.friend.name}</strong></p>

    <Link to={url1}>
        {children} {profile.friend.name}
    </Link>
        </>
    }


    {request &&

        <>
        <Link to={url1}>
            <button onClick={() => setTest(!test)} className="text-align ">accept as friend
                : {request.maker.name}</button>
        </Link>
        <p className="text-align">  or  </p>
        <Link to={url2} >
        <p className="text-align">{children} {request.maker.name}</p>
        </Link>

        </>
    }

    {post &&
        <>
    <Link to={url1}>
        <h1 className={"h1-intro"}>{post.name}</h1>
    </Link>
        </>
    }


</li>
    );
}



export default Lists;