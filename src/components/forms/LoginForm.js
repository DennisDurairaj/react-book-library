import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import Validator from "validator";
import InlineError from "../messages/InlineError";

class LoginForm extends Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  };

  onChange = e => {
    return new Promise((resolve, reject) => {
      this.setState(
        {
          data: {
            ...this.state.data,
            [e.target.name]: e.target.value
          }
        },
        () => {
          resolve(this.state.data);
        }
      );
    });
  };

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    return new Promise((resolve, reject) => {
      this.setState({ errors }, () => {
        resolve(this.state.errors);
      });
    });
  };

  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid Email";
    if (!data.password) errors.password = "Password required";
    return errors;
  };

  render() {
    const { data, errors } = this.state;

    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              value={data.email}
              onChange={this.onChange}
            />
            {errors.email && <InlineError text={errors.email} />}
          </Form.Field>
          <Form.Field>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={data.password}
              onChange={this.onChange}
            />
            {errors.password && <InlineError text={errors.password} />}
          </Form.Field>
          <Button type="submit" primary>
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default LoginForm;
