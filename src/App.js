import React, { useContext } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Menu from "./pages/Menu";
import Search from "./pages/Search";
import Searchresults from "./pages/Searchresults";
import Post from "./pages/Post";
import { AuthContext } from './context/AuthContext';
import Searchresultsprofile from "./pages/Searchresultsprofile";
import Visitedpost from "./pages/Visitedpost";
import Createnormaluserpage from "./pages/Createnormaluserpage";
import Createpost from "./pages/Createpost";
import Createcomment from "./pages/Createcomment";
import Createcommentvisitedprofile from "./pages/Createcommentvisitedprofile";
import Createfriendrequest from "./pages/Createfriendrequest";
import Getallfriendrequests from "./pages/Getallfriendrequests";
import Acceptfriendrequest from "./pages/Acceptfriendrequest";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
      <>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Inloggen</Link></li>
            <li><Link to="/profile">Profiel</Link></li>
              {isAuthenticated ?   <li><Link to="/search">Search</Link></li> : <Redirect to="/" />}
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
            <Route exact path="/createnormaluserpage">
                <Createnormaluserpage />
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

        </Switch>
      </>
  );
}

export default App;
