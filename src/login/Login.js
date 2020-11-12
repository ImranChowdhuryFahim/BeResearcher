import React, { useContext } from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { MyTextInput } from "../signup/SignUp";
import * as Yup from "yup";
import logo from "./logo.png";
import "./styles.css";
import Auth from "../Auth";
import { Redirect, useHistory } from "react-router";
import axios from "axios";
import { CourseContext } from "../data";

const Login = () => {
  const history = useHistory();
  const context = useContext(CourseContext);
  let localData= JSON.parse(localStorage.getItem('login'));
    if(localData && localData.login)
    {
      console.log('hi')
      return <Redirect to='/dashboard'>
      </Redirect>
    }
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
            // axios
            //   .get(
            //     `https://beresearcherbd.herokuapp.com/api/course/getcoursedata/${"Research Methodology"}`
            //   )
            //   .then((res) => {
            //     context.UpdateTotalItem(res.data.totalItem);
            //   });
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
              // console.log(res);
              setSubmitting(false);

              if (res.data.length === 0) {
                alert("Wrong email or Password");
                window.location.reload();
              } else {
                Auth.authenticate();
                if (
                  values.email === "sabirndc08cuet10@gmail.com" ||
                  values.email === "abdulmatincuetcse17@gmail.com" ||
                  values.email === "imran.cuet.cse17@gmail.com" ||
                  values.email === "amanu092@gmail.com"
                ) {
                  Auth.adminAuthenticate();
                  localStorage.setItem('login',JSON.stringify({
                    login: true,
                    adminauth: true,
                    token: res.data.token
                  }))
                }
                else{
                  localStorage.setItem('login',JSON.stringify({
                    login: true,
                    adminauth: false,
                    token: res.data.token
                  }))
                }
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
                placeholder="example@gmail.com"
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
