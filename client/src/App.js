import React from "react";

import setAuthToken from "./utils/setAuthToken";
import { logoutUser, setCurrentUser } from "./actions/authActions";
import jwt_decode from "jwt-decode";
import store from "./store";

import PrivateRoute from "./components/PrivateRoute.jsx";

import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import Management from "./pages/Management";
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
    store.dispatch(logoutUser());

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
            <Route path="/" exact component={Login} />
            <Switch>
              <PrivateRoute path="/dashboard" exact component={Dashboard} />
              <PrivateRoute path="/management" exact component={Management} />
            </Switch>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
