import React, { useContext } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/homepage/Home';
import Profile from './pages/profilepage/Profile';
import Login from './pages/loginpage/Login';
import Menu from "./pages/menupage/Menu";
import Search from "./pages/searchpage/Search";
import Searchresults from "./pages/searchresultspage/Searchresults";
import Post from "./pages/postpage/Post";
import { AuthContext } from './context/authenticationcontext/AuthContext';
import Searchresultsprofile from "./pages/searchresultsprofilepage/Searchresultsprofile";
import Visitedpost from "./pages/visitedpostpage/Visitedpost";
import Createnormaluserpage from "./pages/createnormaluserpage/Createnormaluserpage";
import Createpost from "./pages/createpostpage/Createpost";
import Createcomment from "./pages/createcommentpage/Createcomment";
import Createcommentvisitedprofile from "./pages/createcommentvisitedprofilepage/Createcommentvisitedprofile";
import Createfriendrequest from "./pages/createfriendrequestpage/Createfriendrequest";
import Getallfriendrequests from "./pages/getallfriendrequestspage/Getallfriendrequests";
import Acceptfriendrequest from "./pages/acceptfriendrequestpage/Acceptfriendrequest";
import Createfollowrequest from "./pages/createfollowrequestpage/Createfollowrequest";
import Getallfollowrequests from "./pages/getallfollowrequestspage/Getallfollowrequests";
import Acceptfollowrequest from "./pages/acceptfollowrequestpage/Acceptfollowrequest";
import Getallfriends from "./pages/getallfriendspage/Getallfriends";
import Deletefriend from "./pages/deletefriendpage/Deletefriend";
import Getallfollowers from "./pages/getallfollowerspage/Getallfollowers";
import Deletefollower from "./pages/deletefollowerpage/Deletefollower";
import Getallfollowings from "./pages/getallfollowingpage/Getallfollowings";
import Deletefollowing from "./pages/deletefollowingpage/Deletefollowing";



import Draganddropzzz from "./pages/profileimageupload/Draganddropzzz";
import Postfileupload from "./pages/postfileupload/Postfileupload2";
import DeleteAccount from "./pages/deleteaccountpage/DeleteAccount";
import Settings from "./pages/settingspage/Settings";
import Deletepost from "./pages/deletepostpage/Deletepost";
import Deletecomment from "./pages/deletecommentpage/Deletecomment";
import Createcelebrityuserpage from "./pages/createcelebuserpage/Createcelebrityuserpage";
import Createpageadminpage from "./pages/createpageadminpage/Createpageadminpage";
import Updatebiopage from "./pages/updatebiopage/Updatebiopage";
import Navigationbar from "./context/components/navigationbar/Navigationbar";
import Deletefriendrequest from "./pages/deletefriendrequestpage/Deletefriendrequest";
import Deletefollowrequest from "./pages/deletefollowrequestpage/Deletefollowrequest";
import Privateroutercomponent from "./context/components/componentPrivaterouter/Privateroutercomponent";
import ProfileImageupload from "./pages/profileimageupload/ProfileImageupload";
import PostFileupload22 from "./pages/postfileupload/PostFileupload2.2";
import Postfileupload2 from "./pages/postfileupload/Postfileupload2";
import Createcommentpage from "./pages/createcommentpage/Createcommentpage2";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
      <>

         <Navigationbar>
         </Navigationbar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
            <Route exact path="/createnormaluserpage">
                <Createnormaluserpage />
            </Route>
            <Route exact path="/createcelebrityuserpage">
                <Createcelebrityuserpage />
            </Route>
            <Route exact path="/createpageadminuserpage">
                <Createpageadminpage />
            </Route>


          <Route path="/login">
            <Login />
          </Route>
          {/*<Route path="/profile">*/}
          {/*  {isAuthenticated ? <Profile /> : <Redirect to="/" />}*/}
          {/*</Route>*/}
            <Privateroutercomponent
                path={"/profile"}
                page={<Profile />}
                />


            {/*<Route path="/post/create">*/}
            {/*    {isAuthenticated ? <Createpost /> : <Redirect to="/" />}*/}
            {/*</Route>*/}

            <Privateroutercomponent
                path={"/post/create"}
                page={<Createpost />}
            />

            {/*<Route path="/postfile/create">*/}
            {/*    {isAuthenticated ? <Postfileupload /> : <Redirect to="/" />}*/}
            {/*</Route>*/}

            <Privateroutercomponent
                path={"/postfile/create"}
                page={<Postfileupload2 />}
                />


            {/*<Route path="/post/:postId">*/}
            {/*    {isAuthenticated ? <Post /> : <Redirect to="/" />}*/}
            {/*</Route>*/}

            <Privateroutercomponent
                path={"/post/:postId"}
                page={<Post />}
                />


            {/*<Route path="/comment/create">*/}
            {/*    {isAuthenticated ? <Createcomment /> : <Redirect to="/" />}*/}
            {/*</Route>*/}

            <Privateroutercomponent
                path={"/comment/create"}
                page={<Createcomment />}
                />



            <Route path="/menu">
                <Menu />
            </Route>

        <Route path="/search">
            <Search />
        </Route>

            <Route path="/searchresults">
                <Searchresults />
            </Route>

        <Route path="/searchresultsprofiles/:profile2Id">
            {/*{isAuthenticated ? <Searchresultsprofile /> : <Redirect to="/" />}*/}
            <Searchresultsprofile/>
        </Route>

        <Route path="/searchresultsposts/profile/:post2Id">
            {isAuthenticated ? <Visitedpost /> : <Redirect to="/" />}
        </Route>

            <Privateroutercomponent
                path={"/searchresultsposts/profile/:post2Id"}
                page={<Visitedpost />}
                />



            {/*<Route path="/commentvisitedprofile/create">*/}
            {/*    {isAuthenticated ? <Createcommentvisitedprofile /> : <Redirect to="/" />}*/}
            {/*</Route>*/}

            <Privateroutercomponent
                path={"/commentvisitedprofile/create"}
                page={<Createcommentvisitedprofile />}
                />


            {/*<Route path="/createfriendrequest/create">*/}
            {/*    {isAuthenticated ? <Createfriendrequest /> : <Redirect to="/" />}*/}
            {/*</Route>*/}

            <Privateroutercomponent
                path={"/createfriendrequest/create"}
                page={<Createfriendrequest />}
                />


            {/*<Route path="/friendrequests/profile">*/}
            {/*    {isAuthenticated ? <Getallfriendrequests /> : <Redirect to="/" />}*/}
            {/*</Route>*/}


            <Privateroutercomponent
                path={"/friendrequests/profile"}
                page={<Getallfriendrequests />}
                />


            {/*<Route path="/friendrequestaccept/:friendrequestId">*/}
            {/*    {isAuthenticated ? <Acceptfriendrequest /> : <Redirect to="/" />}*/}
            {/*</Route>*/}

            <Privateroutercomponent
                path={"/friendrequestaccept/:friendrequestId"}
                page={<Acceptfriendrequest />}
                />



            {/*<Route path="/createfollowrequest/create">*/}
            {/*    {isAuthenticated ? <Createfollowrequest /> : <Redirect to="/" />}*/}
            {/*</Route>*/}


            <Privateroutercomponent
                path={"/createfollowrequest/create"}
                page={<Createfollowrequest />}
                />

            {/*<Route path="/followrequests/profile">*/}
            {/*    {isAuthenticated ? <Getallfollowrequests /> : <Redirect to="/" />}*/}
            {/*</Route>*/}

            <Privateroutercomponent
                path={"/followrequests/profile"}
                page={ <Getallfollowrequests />}
                />


            {/*<Route path="/followrequestaccept/:followrequestId">*/}
            {/*    {isAuthenticated ? <Acceptfollowrequest /> : <Redirect to="/" />}*/}
            {/*</Route>*/}

            <Privateroutercomponent
                path={"/followrequestaccept/:followrequestId"}
                page={<Acceptfollowrequest /> }
                />


            {/*<Route path="/friendlist/profile">*/}
            {/*    {isAuthenticated ? <Getallfriends /> : <Redirect to="/" />}*/}
            {/*</Route>*/}


            <Privateroutercomponent
                path={"/friendlist/profile"}
                page={<Getallfriends />}
                />

            {/*<Route path="/friendlistremove/friend/:friendId">*/}
            {/*    {isAuthenticated ? <Deletefriend /> : <Redirect to="/" />}*/}
            {/*</Route>*/}

            <Privateroutercomponent
                path={"/friendlistremove/friend/:friendId"}
                page={<Deletefriend />}
                />

            {/*<Route path="/followerslist/profile">*/}
            {/*    {isAuthenticated ? <Getallfollowers /> : <Redirect to="/" />}*/}
            {/*</Route>*/}


            <Privateroutercomponent
                path={"/followerslist/profile"}
                page={ <Getallfollowers />}
                />

            {/*<Route path="/followerslistremove/follower/:followerId">*/}
            {/*    {isAuthenticated ? <Deletefollower /> : <Redirect to="/" />}*/}
            {/*</Route>*/}


            <Privateroutercomponent
                path={"/followerslistremove/follower/:followerId"}
                page={<Deletefollower />}
                />

            {/*<Route path="/followingslist/profile">*/}
            {/*    {isAuthenticated ? <Getallfollowings /> : <Redirect to="/" />}*/}
            {/*</Route>*/}

            <Privateroutercomponent
                path={"/followingslist/profile"}
                page={<Getallfollowings /> }
                />

            {/*<Route path="/followingslistremove/following/:followingId">*/}
            {/*    {isAuthenticated ? <Deletefollowing /> : <Redirect to="/" />}*/}
            {/*</Route>*/}

            <Privateroutercomponent
                path={"/followingslistremove/following/:followingId"}
                page={<Deletefollowing />}
                />

            {/*<Route path="/profileimage/add">*/}
            {/*    {isAuthenticated ? <Draganddropzzz /> : <Redirect to="/" />}*/}
            {/*</Route>*/}

            <Privateroutercomponent
                path={"/profileimage/add"}
                page={<Draganddropzzz />}
                />

            {/*<Route path="/userprofileaccount/delete">*/}
            {/*    {isAuthenticated ? <DeleteAccount /> : <Redirect to="/" />}*/}
            {/*</Route>*/}

            <Privateroutercomponent
                path={"/userprofileaccount/delete"}
                page={ <DeleteAccount />}
                />

            {/*<Route path="/userprofile/settings">*/}
            {/*    {isAuthenticated ? <Settings /> : <Redirect to="/" />}*/}
            {/*</Route>*/}

            <Privateroutercomponent
                path={"/userprofile/settings"}
                page={<Settings />}
                />

            {/*<Route path="/postsdelete/delete">*/}
            {/*    {isAuthenticated ? <Deletepost /> : <Redirect to="/" />}*/}
            {/*</Route>*/}

            <Privateroutercomponent
                path={"/postsdelete/delete"}
                page={<Deletepost />}
                />

            {/*<Route path="/commentdelete/delete/:commentId">*/}
            {/*    {isAuthenticated ? <Deletecomment /> : <Redirect to="/" />}*/}
            {/*</Route>*/}

            <Privateroutercomponent
                path={"/commentdelete/delete/:commentId"}
                page={<Deletecomment />}
                />

            {/*<Route path="/profilebio/update/">*/}
            {/*    {isAuthenticated ? <Updatebiopage /> : <Redirect to="/" />}*/}
            {/*</Route>*/}

            <Privateroutercomponent
                path={"/profilebio/update/"}
                page={<Updatebiopage />}
                />

            {/*<Route path="/friendrequestdelete/:friendrequestId">*/}
            {/*    {isAuthenticated ? <Deletefriendrequest /> : <Redirect to="/" />}*/}
            {/*</Route>*/}

            <Privateroutercomponent
                path={"/friendrequestdelete/:friendrequestId"}
                page={<Deletefriendrequest />}
                />

            {/*<Route path="/followrequestdelete/:followrequestId">*/}
            {/*    {isAuthenticated ? <Deletefollowrequest /> : <Redirect to="/" />}*/}
            {/*</Route>*/}

            <Privateroutercomponent
                path={"/followrequestdelete/:followrequestId"}
                page={<Deletefollowrequest />}
                />
            <Privateroutercomponent
                path={"/profileimageadd/page"}
                page={<ProfileImageupload />}
            />
            <Privateroutercomponent
                path={"/postfileadd/page"}
                page={<PostFileupload22/>}
            />

            <Privateroutercomponent
                path={"/commentadd/page"}
                page={<Createcommentpage/>}
            />



        </Switch>
      </>
  );
}

export default App;
