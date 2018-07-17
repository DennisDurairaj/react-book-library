import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import DashboardPage from "./components/pages/DashboardPage/DashboardPage";
import SignupPage from "./components/pages/SignupPage/SignupPage";
import ConfirmationPage from "./components/pages/ConfirmationPage/ConfirmationPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage/ForgotPasswordPage";
import ResetPasswordPage from "./components/pages/ResetPasswordPage/ResetPasswordPage";
import NewBookPage from "./components/pages/NewBookPage/NewBookPage";
import TopNavigation from "./components/navigation/TopNavigation";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";

const App = ({ location, isAuthenticated }) => {
  return (
    <div className="ui container">
      {isAuthenticated && <TopNavigation />}
      <Route location={location} path="/" exact component={HomePage} />
      <Route
        location={location}
        path="/confirmation/:token"
        exact
        component={ConfirmationPage}
      />
      <GuestRoute
        location={location}
        path="/login"
        exact
        component={LoginPage}
      />
      <GuestRoute
        location={location}
        path="/forgot_password"
        exact
        component={ForgotPasswordPage}
      />
      <GuestRoute
        location={location}
        path="/signup"
        exact
        component={SignupPage}
      />
      <GuestRoute
        location={location}
        path="/reset_password/:token"
        exact
        component={ResetPasswordPage}
      />
      <UserRoute
        location={location}
        path="/dashboard"
        exact
        component={DashboardPage}
      />
      <UserRoute
        location={location}
        path="/books/new"
        exact
        component={NewBookPage}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.email
  };
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  null
)(App);
