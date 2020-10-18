import React, { Component } from "react";

import "./Main.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import FourZeroFour from "../FourZeroFour/FourZeroFour";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";

import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";


class Main extends Component {
  render() {
    return (
      <div className="full">
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <Helmet>
              <title>{"Home | "}</title>
            </Helmet>
            <Home />
          </Route>
          <Route path="*">
            <Helmet>
              <title>{"404 Error: Page Not Found | "}</title>
            </Helmet>
            <FourZeroFour />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
