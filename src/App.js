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
import Createuserpage from "./pages/createnormaluserpage/Createuserpage";
import Createpost from "./pages/createpostpage/Createpost";
import Createcomment from "./pages/createcommentpage/Createcomment";
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
import DeleteAccount from "./pages/deleteaccountpage/DeleteAccount";
import Settings from "./pages/settingspage/Settings";
import Deletepost from "./pages/deletepostpage/Deletepost";
import Deletecomment from "./pages/deletecommentpage/Deletecomment";
import Updatebiopage from "./pages/updatebiopage/Updatebiopage";
import Navigationbar from "./context/components/navigationbar/Navigationbar";
import Deletefriendrequest from "./pages/deletefriendrequestpage/Deletefriendrequest";
import Deletefollowrequest from "./pages/deletefollowrequestpage/Deletefollowrequest";
import Privateroutercomponent from "./context/components/componentPrivaterouter/Privateroutercomponent";
import ProfileImageupload from "./pages/profileimageupload/ProfileImageupload";
import PostFileupload22 from "./pages/postfileupload/PostFileupload2.2";
import Createcommentpage from "./pages/createcommentpage/Createcommentpage2";
import Createpostpage from "./pages/createpostpage/Createpostpage";
import Createnormalpage from "./pages/createnormaluserpage/Createnormalpage";
import Createcelebritypage from "./pages/createcelebuserpage/Createcelebritypage";
import Createpageadminpage2 from "./pages/createpageadminpage/Createpageadminpage2";
import Createcommentvisitedprofilepage from "./pages/createcommentvisitedprofilepage/Createcommentvisitedprofilepage";

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

            <Route exact path="/createuserpage/:urlcreate">
                <Createuserpage />
            </Route>

            <Route exact path="/createnormalpage/upload/data">
                <Createnormalpage/>
            </Route>


            <Route exact path="/createcelebritypage/upload/data">
                <Createcelebritypage />
            </Route>


            <Route exact path="/createpageadminpage/upload/data">
                <Createpageadminpage2 />
            </Route>


            <Route path="/login">
            <Login />
          </Route>

            <Privateroutercomponent
                path={"/profile"}
                page={<Profile />}
                />




            <Privateroutercomponent
                path={"/post/create"}
                page={<Createpost />}
            />




            <Privateroutercomponent
                path={"/post/:postId"}
                page={<Post />}
                />




            <Privateroutercomponent
                path={"/comment/create/:commentpath"}
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


            <Privateroutercomponent
                path={"/createfriendrequest/create"}
                page={<Createfriendrequest />}
                />





            <Privateroutercomponent
                path={"/friendrequests/profile"}
                page={<Getallfriendrequests />}
                />



            <Privateroutercomponent
                path={"/friendrequestaccept/:friendrequestId"}
                page={<Acceptfriendrequest />}
                />






            <Privateroutercomponent
                path={"/createfollowrequest/create"}
                page={<Createfollowrequest />}
                />



            <Privateroutercomponent
                path={"/followrequests/profile"}
                page={ <Getallfollowrequests />}
                />




            <Privateroutercomponent
                path={"/followrequestaccept/:followrequestId"}
                page={<Acceptfollowrequest /> }
                />





            <Privateroutercomponent
                path={"/friendlist/profile"}
                page={<Getallfriends />}
                />



            <Privateroutercomponent
                path={"/friendlistremove/friend/:friendId"}
                page={<Deletefriend />}
                />




            <Privateroutercomponent
                path={"/followerslist/profile"}
                page={ <Getallfollowers />}
                />




            <Privateroutercomponent
                path={"/followerslistremove/follower/:followerId"}
                page={<Deletefollower />}
                />



            <Privateroutercomponent
                path={"/followingslist/profile"}
                page={<Getallfollowings /> }
                />



            <Privateroutercomponent
                path={"/followingslistremove/following/:followingId"}
                page={<Deletefollowing />}
                />



            <Privateroutercomponent
                path={"/profileimage/add/:url"}
                page={<Draganddropzzz />}
                />



            <Privateroutercomponent
                path={"/userprofileaccount/delete"}
                page={ <DeleteAccount />}
                />



            <Privateroutercomponent
                path={"/userprofile/settings"}
                page={<Settings />}
                />



            <Privateroutercomponent
                path={"/postsdelete/delete"}
                page={<Deletepost />}
                />



            <Privateroutercomponent
                path={"/commentdelete/delete/:commentId"}
                page={<Deletecomment />}
                />



            <Privateroutercomponent
                path={"/profilebio/update/"}
                page={<Updatebiopage />}
                />


            <Privateroutercomponent
                path={"/friendrequestdelete/:friendrequestId"}
                page={<Deletefriendrequest />}
                />


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
            <Privateroutercomponent
                path={"/postadd/page"}
                page={<Createpostpage/>}
            />

            <Privateroutercomponent
                path={"/commentadding/visitedpage"}
                page={<Createcommentvisitedprofilepage/>}
            />



        </Switch>
      </>
  );
}

export default App;
