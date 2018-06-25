import React from "react";
import { shallow, mount } from "enzyme";
import LoginForm from "./LoginForm";
import InlineError from "../messages/InlineError";
import renderer from "react-test-renderer";

describe("LoginForm component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LoginForm />);
  });
  it("Renders a Form component", () => {
    expect(wrapper.find("Form")).toHaveLength(1);
  });

  describe("User populates input", () => {
    const email = "dennis@gmail.com";

    it("should update the state property", () => {
      const input = wrapper.find("#email");
      const e = {
        target: { name: "email", value: email }
      };
      wrapper
        .instance()
        .onChange(e)
        .then(data => {
          expect(data.email).toEqual(email);
        });
    });
  });
  describe("User submits the form", () => {
    describe("User submits the form correctly", () => {
      const data = {
        email: "dennis@gmail.com",
        password: "12345"
      };
      it("should have no validation errors", () => {
        const button = wrapper.find("Button");
        button.simulate("click");
        expect(wrapper.find("InlineError").length).toBe(0);
      });
    });

    describe("User submits the form incorrectly", () => {
      const data = {
        email: "",
        password: ""
      };
      it("should have validation errors", () => {
        wrapper.setState({ data: data }, () => {
          // wrapper
          //   .instance()
          //   .onSubmit()
          //   .rejects(data => {
          //     console.log(data);
          //     expect(data).toEqual({
          //       email: "Invalid Email",
          //       password: "Password required"
          //     });
          //   });
          expect.assertions(1);
          return wrapper
            .instance()
            .onSubmit()
            .then(data => {
              console.log(data);
              expect(data).toEqual({
                email: "Invalid Email",
                password: "Password required"
              });
            });
        });
      });
    });
  });
});
