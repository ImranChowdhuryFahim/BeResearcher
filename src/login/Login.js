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
          initialValues={{
            email: "", //imran.cuet.cse17@gmail.com
            password: "", //12345678
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string().required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            axios({
              method: "POST",
              url: `https://beresearcherbd.herokuapp.com/api/student/login`,
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              data: JSON.stringify({
                email: values.email,
                password: values.password,
              }),
            }).then((res) => {
              console.log(res);
              setSubmitting(false);

              if (res.data.length === 0) {
                alert("Wrong email or Password");
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
                if (
                  values.email === "sabirndc08cuet10@gmail.com" ||
                  "abdulmatincuetcse17@gmail.com" ||
                  "imran.cuet.cse17@gmail.com"
                )
                  Auth.adminAuthenticate();
                console.log(Auth.getAdminAuth(), "admin auth");
                history.push("/dashboard");
              }
            });
            // await new Promise((r) => setTimeout(r, 500));
          }}
        >
          {(props) => (
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
              <button type="submit" disabled={props.isSubmitting}>
                {props.isSubmitting ? (
                  <div className="loading">Loging in</div>
                ) : (
                  <div>Login</div>
                )}
              </button>
            </Form>
          )}
        </Formik>
        <Link to="/signup" style={{ float: "right" }}>
          Create an account
        </Link>
      </div>
    </div>
  );
};

export default Login;
