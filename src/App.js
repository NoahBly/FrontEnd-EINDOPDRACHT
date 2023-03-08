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
import Deletefriend from "./pages/Deletefriend";
import Getallfollowers from "./pages/getallfollowerspage/Getallfollowers";
import Deletefollower from "./pages/Deletefollower";
import Getallfollowings from "./pages/getallfollowingpage/Getallfollowings";
import Deletefollowing from "./pages/Deletefollowing";
import Uploadprofileimage from "./pages/Uploadprofileimage";
import Draganddropz from "./context/components/Draganddropz";
import Draganddropzz from "./context/components/Draganddropzz";
import Draganddropzzz from "./context/components/profileimageupload/Draganddropzzz";
import Postfileupload from "./context/components/postfileupload/Postfileupload";
import DeleteAccount from "./pages/DeleteAccount";
import Settings from "./pages/Settings";
import Deletepost from "./pages/Deletepost";
import Deletecomment from "./pages/Deletecomment";
import Createcelebrityuserpage from "./pages/createcelebuserpage/Createcelebrityuserpage";
import Createpageadminpage from "./pages/createpageadminpage/Createpageadminpage";
import Updatebiopage from "./pages/Updatebiopage";
import Navigationbar from "./context/components/navigationbar/Navigationbar";

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
          <Route path="/profile">
            {isAuthenticated ? <Profile /> : <Redirect to="/" />}
          </Route>
            <Route path="/post/create">
                {isAuthenticated ? <Createpost /> : <Redirect to="/" />}
            </Route>
            <Route path="/postfile/create">
                {isAuthenticated ? <Postfileupload /> : <Redirect to="/" />}
            </Route>
            <Route path="/post/:postId">
                {isAuthenticated ? <Post /> : <Redirect to="/" />}
            </Route>
            <Route path="/comment/create">
                {isAuthenticated ? <Createcomment /> : <Redirect to="/" />}
            </Route>
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
            <Route path="/commentvisitedprofile/create">
                {isAuthenticated ? <Createcommentvisitedprofile /> : <Redirect to="/" />}
            </Route>
            <Route path="/createfriendrequest/create">
                {isAuthenticated ? <Createfriendrequest /> : <Redirect to="/" />}
            </Route>
            <Route path="/friendrequests/profile">
                {isAuthenticated ? <Getallfriendrequests /> : <Redirect to="/" />}
            </Route>
            <Route path="/friendrequestaccept/:friendrequestId">
                {isAuthenticated ? <Acceptfriendrequest /> : <Redirect to="/" />}
            </Route>
            <Route path="/createfollowrequest/create">
                {isAuthenticated ? <Createfollowrequest /> : <Redirect to="/" />}
            </Route>
            <Route path="/followrequests/profile">
                {isAuthenticated ? <Getallfollowrequests /> : <Redirect to="/" />}
            </Route>
            <Route path="/followrequestaccept/:followrequestId">
                {isAuthenticated ? <Acceptfollowrequest /> : <Redirect to="/" />}
            </Route>
            <Route path="/friendlist/profile">
                {isAuthenticated ? <Getallfriends /> : <Redirect to="/" />}
            </Route>

            <Route path="/friendlistremove/friend/:friendId">
                {isAuthenticated ? <Deletefriend /> : <Redirect to="/" />}
            </Route>

            <Route path="/followerslist/profile">
                {isAuthenticated ? <Getallfollowers /> : <Redirect to="/" />}
            </Route>

            <Route path="/followerslistremove/follower/:followerId">
                {isAuthenticated ? <Deletefollower /> : <Redirect to="/" />}
            </Route>

            <Route path="/followingslist/profile">
                {isAuthenticated ? <Getallfollowings /> : <Redirect to="/" />}
            </Route>

            <Route path="/followingslistremove/following/:followingId">
                {isAuthenticated ? <Deletefollowing /> : <Redirect to="/" />}
            </Route>

            <Route path="/profileimage/add">
                {isAuthenticated ? <Draganddropzzz /> : <Redirect to="/" />}
            </Route>

            <Route path="/userprofileaccount/delete">
                {isAuthenticated ? <DeleteAccount /> : <Redirect to="/" />}
            </Route>

            <Route path="/userprofile/settings">
                {isAuthenticated ? <Settings /> : <Redirect to="/" />}
            </Route>

            <Route path="/postsdelete/delete">
                {isAuthenticated ? <Deletepost /> : <Redirect to="/" />}
            </Route>


            <Route path="/commentdelete/delete/:commentId">
                {isAuthenticated ? <Deletecomment /> : <Redirect to="/" />}
            </Route>

            <Route path="/profilebio/update/">
                {isAuthenticated ? <Updatebiopage /> : <Redirect to="/" />}
            </Route>


        </Switch>
      </>
  );
}

export default App;
