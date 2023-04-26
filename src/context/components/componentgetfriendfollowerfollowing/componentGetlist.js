import {Link} from "react-router-dom";

function List ({profile,children, url}) {

 return (


<li key={`${profile.id}-${profile.friend.name}`}>

    <p><strong> {children}</strong></p>

    <Link to={url}>
        {children}
    </Link>

</li>

 );

}

export default List;