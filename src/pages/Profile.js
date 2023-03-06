import React, { useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {AuthContext} from "../context/AuthContext";
import {Link} from "react-router-dom";

function Profile() {
    const [profile, setProfile] = useState({});
    const {setProfilepostsfunction} = useContext(AuthContext);
    const {userDetails} = useContext(AuthContext);
    const {setProfileidfunction} = useContext(AuthContext);
    const {profileidcurrent} = useContext(AuthContext);

    const[imageBlob, setImageBlob] = useState(null);

    useEffect(() => {
        console.log(userDetails.id);

        async function fetchData() {
            console.log(profileidcurrent);
            try {
                const {data} = await axios.get(`http://localhost:8083/profiles/user/${userDetails.id}`);
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

        try {
            const response = await axios.get(`http://localhost:8083/profiles/download/${userDetails.profile.id}`, {
                responseType: "blob"
            });
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
            console.log(imageBlob)
            console.log(response);
            console.log(response.data);
        } catch (e) {
            console.error(e);
        }
    }


    return (

        <section className="poke-card">
            {profile &&
            <>
                <h2>{profile.name}</h2>
                {imageBlob  && <img
                    alt="Afbeelding profile"
                    src={imageBlob.src} width="500px"
                /> }
                <Link to={`/profileimage/add`}> <p>Add profileimage!</p></Link>
                <p><strong>Friendlist: </strong>{profile.friendlist && <p>{profile.friendlist.length}</p>}</p>
                <p><strong>Followerslist: </strong>{profile.followerslist && <p>{profile.followerslist.length}</p>}</p>
                <p><strong>Followingslist: </strong>{profile.followinglist && <p>{profile.followinglist.length}</p>}</p>
                <h2><strong>Bio: </strong>{profile.bioinformation}</h2>
                <Link to={`/profilebio/update`}> <p>update Bio!</p></Link>
               <Link to={`/post/create`}> <p>create post!</p></Link>
                <p><strong>Posts: </strong></p>
                {profile.posts &&
                    <ul>
                        {profile.posts.map((post) => {
                            return (
                                <li key={`${post.id}-${post.name}`}>
                                    <Link to={`/post/${post.id}`}>
                                       <p> {post.name} </p>
                                    </Link>
                                    <h2>{post.name}</h2>

                        </li>
                            )
                        })}
                    </ul>
                }

            </>
            }
        </section>
    )
    ;
}
export default Profile;
