import {Link} from "react-router-dom";

function List ({profile,children, url}) {

 return (


<li >

    <p><strong> {profile.friend.name}</strong></p>

    <Link to={url}>
        {children} {profile.friend.name}
    </Link>

</li>

 );

}

export default List;