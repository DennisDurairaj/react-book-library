import React, { Component } from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import DashboardPage from "./components/pages/DashboardPage/DashboardPage";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";

const App = ({ location }) => {
  return (
    <div className="ui container">
      <Route location={location} path="/" exact component={HomePage} />
      <GuestRoute
        location={location}
        path="/login"
        exact
        component={LoginPage}
      />
      <UserRoute
        location={location}
        path="/dashboard"
        exact
        component={DashboardPage}
      />
    </div>
  );
};

export default App;
