import React from "react";
import LoginForm from "../../forms/LoginForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../../actions/auth.js";

class LoginPage extends React.Component {
  submit = data => {
    return this.props
      .login(data)
      .then(() => this.props.history.push("/dashboard"));
  };
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     login
//     }
//   }
// }

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(
  null,
  { login }
)(LoginPage);
