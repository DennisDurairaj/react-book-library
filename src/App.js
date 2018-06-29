import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import DashboardPage from "./components/pages/DashboardPage/DashboardPage";
import SignupPage from "./components/pages/SignupPage/SignupPage";
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
      <GuestRoute
        location={location}
        path="/signup"
        exact
        component={SignupPage}
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
