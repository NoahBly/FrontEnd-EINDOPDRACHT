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

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
      <>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Inloggen</Link></li>
            <li><Link to="/profile">Profiel</Link></li>
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

            <Route path="/menu">
                <Menu />
            </Route>
        <Route path="/search">
            <Search />
        </Route>
            <Route path="/searchresults">
                <Searchresults />
            </Route>
        <Route path="/searchresults/:profile2Id">
            {isAuthenticated ? <Searchresultsprofile /> : <Redirect to="/" />}
        </Route>
        <Route path="/searchresults/profile/:post2Id">
            {isAuthenticated ? <Visitedpost /> : <Redirect to="/" />}
        </Route>

        </Switch>
      </>
  );
}

export default App;
