import React, { useContext } from "react";
import { Formik, Form, ErrorMessage, useField } from "formik";
import { Link } from "react-router-dom";
import { MyTextInput } from "../signup/SignUp";
import * as Yup from "yup";
import logo from "./logo.png";
import "./styles.css";
import Auth from "../Auth";
import { useHistory } from "react-router";
import axios from "axios";
import { CourseContext } from "../data";

const Login = () => {
  const history = useHistory();
  const context = useContext(CourseContext);
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
            <button
              type="submit"
              onClick={(e) => {
                axios({
                  method: "POST",
                  url: `https://beresearcherbd.herokuapp.com/api/student/login`,
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  data: JSON.stringify({
                    email: "imran.cuet.cse17@gmail.com",
                    password: "12345678",
                  }),
                }).then((res) => {
                  console.log(res);
                  if (res.data.length === 0) {
                    window.location.reload();
                  } else {
                    
                    context.UpdateCurrentUserDetails({
                      id: res.data._id,
                      name: res.data.firstName + " " + res.data.lastName,
                      email: res.data.email,
                    });
                    context.UpdatecurrentCourseProgress({
                      _id: res.data.enrolledCourses[0]._id,
                      title: res.data.enrolledCourses[0].title,
                      completedItem: res.data.enrolledCourses[0].completedItem,
                    });
                    context.UpdateCurrentContentDetails(
                      res.data.enrolledCourses[0].currentContentDetails
                    );
                    Auth.authenticate();
                    history.push("/dashboard");
                  }
                });
              }}
            >
              Submit
            </button>
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
