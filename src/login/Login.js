import React from "react";
import { Formik, Form, ErrorMessage, useField } from "formik";
import { MyTextInput } from "../signup/SignUp";
import * as Yup from "yup";
const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
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
            type="password"
            placeholder="********"
          />

          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
