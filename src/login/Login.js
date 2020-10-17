import React from "react";
import { Formik, Form, ErrorMessage, useField } from "formik";
import { Link } from "react-router-dom";
import { MyTextInput } from "../signup/SignUp";
import * as Yup from "yup";
import logo from "./logo.png";
import "./styles.css";

const Login = () => {
  return (
    <div>
      <div className="login-form-container">
        <div className="login-form-header">
          <img src={logo} alt="" />
          <h1>Login</h1>
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .min(8, "Must be 8 characters or more")
              .required("Required"),
            killai: Yup.string().required("Required"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values);
            await new Promise((r) => setTimeout(r, 500));
            setSubmitting(false);
          }}
        >
          <Form>
            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="abdulmatin@gmail.com"
            />
            <MyTextInput
              label="password"
              name="password"
              type="text"
              placeholder="********"
            />
            <br />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
        <Link to="/signup" style={{ float: "right" }}>
          Create an account
        </Link>
      </div>
    </div>
  );
};

export default Login;
