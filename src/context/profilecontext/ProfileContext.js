import React, {createContext, useContext, useEffect, useState} from 'react';
import {AuthContext} from "../authenticationcontext/AuthContext";

export const ProfileContext = createContext({});

function ProfileContextProvider({ children }) {

    const{auth} = useContext(AuthContext);

    const [profileposts, setProfileposts] = useState([]);

    const [searchresultprofiles, setSearchresultprofiles] = useState([]);

    const [visitedprofileposts, setVisitedprofileposts] = useState([]);

    const [profileid, setProfileid] = useState();

    const [postid, setPostid] = useState();

    const [visitedprofid, setVisitedprofid] = useState();

    const [visitedpostid, setVisitedpostid] = useState();

    const [upload, setUpload] = useState();

    const [linkkey, setLinkkey] = useState();
    const [linkkey2, setLinkkey2] = useState();
    const [datacomment, setDatacomment] = useState({});

    function arrangeprofileposts(posts) {

        console.log(posts);
        setProfileposts(posts);

    }

    function arrangeprofilesearchresults(profiles) {
        setSearchresultprofiles(profiles);
    }

    function arrangevisitedprofileposts(posts) {
        setVisitedprofileposts(posts);
    }

    function arrangeprofileid(profileid) {
        setProfileid(profileid);
    }

    function arrangepostid(postid) {
        setPostid(postid);
    }

    function arrangevisitedprofileid(profileid) {
        setVisitedprofid(profileid);
    }

    function arrangevisitedpostid(postid) {
        setVisitedpostid(postid);
    }

    function arrangeupload(file){
        setUpload(file);
    }
    function arrangelinkkey(linkkey){
        setLinkkey(linkkey);
    }
    function arrangelinkkey2(linkkey){
        setLinkkey2(linkkey);
    }
    function arrangedatacomment(data){
        setDatacomment(data);
    }

    const contextData = {
        setProfilepostsfunction: arrangeprofileposts,
        postsofprofile: profileposts,
        profilesearchresults: searchresultprofiles,
        setProfilesearchresults: arrangeprofilesearchresults,
        postsofvisitedprofile: visitedprofileposts,
        setVisitedprofilepostsfunction: arrangevisitedprofileposts,
        setProfileidfunction: arrangeprofileid,
        profileidcurrent: profileid,
        setPostidfunction: arrangepostid,
        postidcurrent: postid,
        setVisitedprofileidfunction: arrangevisitedprofileid,
        visitedprofileid: visitedprofid,
        visitedpostidcurrent: visitedpostid,
        setVisitedpostidfunction: arrangevisitedpostid,
        uploadfile : upload,
        setUploadfilecontext: arrangeupload,
        linkkeypathProfimage: linkkey,
        makeLinkkeyProfimage: arrangelinkkey,
        linkkeypathPostfile: linkkey2,
        makeLinkkeyPostfile: arrangelinkkey2,
        commentdata: datacomment,
        setCommentData: setDatacomment
    };

    return (
        <ProfileContext.Provider value={contextData}>
            {children}
        </ProfileContext.Provider>
    );
}

export default ProfileContextProvider;