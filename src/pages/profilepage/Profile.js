import React, { useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {AuthContext} from "../../context/authenticationcontext/AuthContext";
import {Link} from "react-router-dom";
import "../profilepage/profilestyle.css"
import {ProfileContext} from "../../context/profilecontext/ProfileContext";

function Profile() {
    const [profile, setProfile] = useState({});
    const {setProfilepostsfunction,setProfileidfunction,profileidcurrent} = useContext(ProfileContext);
    const {userDetails} = useContext(AuthContext);


    const[imageBlob, setImageBlob] = useState(null);
    const currenttoken = localStorage.getItem("token");
    useEffect(() => {
        console.log(userDetails.id);

        async function fetchData() {
            console.log(profileidcurrent);

            try {
                const {data} = await axios.get(`http://localhost:8083/profiles/user/${userDetails.id}`,{
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${currenttoken}`, // is hetzelfde als 'Bearer ' + token,
                    }});
                console.log(data);
                setProfile(data);
                setProfilepostsfunction(data.posts);
                setProfileidfunction(data.id);
                console.log(data.id);

                if(data.profileimage !== null) {
                    fetchData2();
                }

            } catch (e) {
                console.error(e);
            }
        }
        if (userDetails) {
            fetchData();
        }
    },[]);


console.log('profile:', profile)
    async function fetchData2() {
        const currenttoken = localStorage.getItem("token");
        try {
            const response = await axios.get(`http://localhost:8083/profiles/download/${userDetails.profile.id}`, {
                responseType: "blob",
                headers: {
                Authorization: `Bearer ${currenttoken}`, // is hetzelfde als 'Bearer ' + token,
            }});
            const blob = response.data;
            const reader = new FileReader();
            reader.onload= function(e) {
                const image = new Image();
                image.src = e.target.result;
                setImageBlob(image);
            }
            // console.log(data);
            // setImageBlob(data);
            // const bloburl = URL.createObjectURL(data.blob);
            // console.log(bloburl);
            reader.readAsDataURL(blob);
            // console.log(imageBlob)
            // console.log(response);
            console.log(response.data);
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <div className="outer-container-2">
        <section className="inner-container-2">
            <div className="article-section-2">
            {profile &&
            <>
                <h1 className="h1-intro">{profile.name}</h1>
                {imageBlob  && <img
                    alt="Afbeelding profile"
                    src={imageBlob.src}
                    className="image-post"
                /> }
                <Link to={`/profileimage/add`}> <p>Add profileimage!</p></Link>
                <p className="p-intro"><strong>Friendlist: </strong>{profile.friendlist && <p>{profile.friendlist.length}</p>}</p>
                <p className="p-intro"><strong>Followerslist: </strong>{profile.followerslist && <p>{profile.followerslist.length}</p>}</p>
                <p className="p-intro"><strong>Followingslist: </strong>{profile.followinglist && <p>{profile.followinglist.length}</p>}</p>
                <h1 className="h1-intro"><strong>Bio: </strong>{profile.bioinformation}</h1>
                <Link to={`/profilebio/update`}> <p className="p-intro">update Bio!</p></Link>
               <Link to={`/post/create`}> <p className="p-intro">create post!</p></Link>
                <p className="p-intro"><strong>Posts: </strong></p>
                {profile.posts &&
                    <ul className="article-section-2 ">
                        {profile.posts.map((post) => {
                            return (
                                <li key={`${post.id}-${post.name}`}>
                                    <Link to={`/post/${post.id}`}>
                                        <h1 className="h1-intro">{post.name}</h1>
                                    </Link>


                        </li>
                            )
                        })}
                    </ul>
                }

            </>
            }
        </div>
        </section>
        </div>
    )
    ;
}
export default Profile;
