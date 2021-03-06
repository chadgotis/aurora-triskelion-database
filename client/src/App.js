import React from "react";

import setAuthToken from "./utils/setAuthToken";
import { forceLogout, setCurrentUser } from "./actions/authActions";
import jwt_decode from "jwt-decode";
import store from "./store";

import PrivateRoute from "./components/PrivateRoute.jsx";

import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import Management from "./pages/Management";
import Reports from "./pages/Reports";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Accounts from "./pages/Accounts";
import OfficerScreen from "./pages/OfficerScreen";
import Logs from "./pages/Logs";
import MunicipalCouncilSreen from "./pages/MunicipalCouncilSreen";
import ChapterScreen from "./pages/ChapterScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

if (localStorage.jwtToken) {
  // set auth token header
  setAuthToken(localStorage.jwtToken);
  //decode token
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  //Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //Logouut user
    store.dispatch(forceLogout());

    //Redirect
    window.location.href = "/";
  }
}
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Container>
            <Switch>
              <Route path="/" exact component={Login} />
              <PrivateRoute path="/dashboard" exact component={Dashboard} />
              <PrivateRoute path="/management" exact component={Management} />
              <PrivateRoute path="/accounts" exact component={Accounts} />
              <PrivateRoute path="/reports" exact component={Reports} />
              <PrivateRoute path="/about" exact component={About} />
              <PrivateRoute path="/settings" exact component={Settings} />
              <PrivateRoute path="/logs" exact component={Logs} />
              <PrivateRoute
                path="/settings/council/:council_id/:chapter_id"
                component={ChapterScreen}
              />
              <PrivateRoute
                path="/settings/officers/:id"
                component={OfficerScreen}
              />
              <PrivateRoute
                path="/settings/council/:id"
                component={MunicipalCouncilSreen}
              />

              {/* 404 Not Found */}
              <Route component={NotFound} />
            </Switch>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
