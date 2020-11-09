import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Router>
        <Header />
        <main>
          <Container>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
