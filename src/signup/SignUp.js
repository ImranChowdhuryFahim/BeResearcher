import React, { useState } from "react";
import { Formik, Form, useField } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import * as Yup from "yup";
import logo from "./logo.png";
import "./style.css";

import SocialMedia from "./SocialMedia";

export const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export const MySelect = ({ label, children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "select" });
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props}>
        {children}
      </select>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export const SuperVisorSignUp = () => {
  return (
    <div>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          password: Yup.string()
            .min(8, "Must be 8 characters or more")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          // institution: Yup.string()
          //   .oneOf(["BUET", "CUET", "KUET", "RUET", "SUST"])
          //   .required("Required"),
          // position: Yup.string().required("Required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values);
          await new Promise((r) => setTimeout(r, 500));
          setSubmitting(false);
        }}
      >
        <Form>
          <h1>Supervisor SignUp</h1>
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="First Name"
          />
          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Last Name"
          />

          <MyTextInput
            label="Email"
            name="email"
            type="email"
            placeholder="xyz@gmail.com"
          />
          <MyTextInput
            label="Password"
            name="password"
            type="password"
            placeholder="********"
          />

          <MyTextInput
            label="Institution"
            name="institution"
            type="text"
            list="institution"
            placeholder="Type a institution"
          />
          <datalist id="institution">
            <option value="BUET">BUET</option>
            <option value="CUET">CUET</option>
            <option value="KUET">KUET</option>
            <option value="RUET">RUET</option>
            <option value="SUST">SUST</option>
            <option value="DU">DU</option>
            <option value="CU">CU</option>
            <option value="RU">RU</option>
            <option value="KU">kU</option>
          </datalist>

          <MySelect label="Postition" name="position">
            <option value="">Select a position</option>
            <option value="prof">Professor</option>
            <option value="associateprof">Associate Professor</option>
            <option value="assistantprof">Assistant Professor</option>
            <option value="lecturer">Lecturer</option>
          </MySelect>

          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

const SignUp = () => {
  const history = useHistory();
  const [signUpAsSupervisor, setSignUpAsSupervisor] = useState(false);
  const [studentSingUp, setStudentSingUp] = useState(false); // for resposive view, less than 801px

  return (
    <div
      className={
        signUpAsSupervisor
          ? "container right-panel-active"
          : studentSingUp
          ? "container student-signup-active"
          : "container"
      }
    >
      <div className="mobile-view-form-top-div">
        <div
          style={{ margin: "3px", cursor: "pointer" }}
          onClick={(e) => {
            setSignUpAsSupervisor(false);
            setStudentSingUp(false);
          }}
        >
          <FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" />
        </div>
        <img src={logo} alt="logo"></img>
      </div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          institution: "",
          occupation: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          password: Yup.string()
            .min(8, "Must be 8 characters or more")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          // institution: Yup.string()
          //   .oneOf(["teacher", "undergrad", "postgrad"])
          //   .required("Required"),
          // occupation: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          fetch(
            "https://beresearcherbd.herokuapp.com/api/student/registration",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            }
          )
            .then((result) => {
              setSubmitting(false);
              history.push("/dashboard");
              return result.text();
            })
            .then((res) => console.log(res, "bhaiaja"))
            .catch((err) => {
              alert(err);
              setSubmitting(false);
            });
          // await new Promise((r) => setTimeout(r, 500));
        }}
      >
        {(props) => (
          <div className="student-signup-container">
            <Form>
              <h2>Student SignUp</h2>
              <MyTextInput
                label="First Name"
                name="firstName"
                type="text"
                placeholder="First Name"
              />
              <MyTextInput
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Last Name"
              />
              <MyTextInput
                label="Email"
                name="email"
                type="email"
                placeholder="example@gmail.com"
              />
              <MyTextInput
                label="Password"
                name="password"
                type="password"
                placeholder="********"
              />
              <MyTextInput
                label="Institution"
                name="institution"
                type="text"
                list="institution"
                placeholder="Type a institution"
              />
              <datalist id="institution">
                <option value="BUET">BUET</option>
                <option value="CUET">CUET</option>
                <option value="KUET">KUET</option>
                <option value="RUET">RUET</option>
                <option value="SUST">SUST</option>
                <option value="DU">DU</option>
                <option value="CU">CU</option>
                <option value="RU">RU</option>
                <option value="KU">kU</option>
              </datalist>
              <MySelect label="Occupation" name="occupation">
                <option value="">Select a job type</option>
                <option value="teacher">Teacher</option>
                <option value="undergrad">Under Grad Student</option>
                <option value="postgrad">Post Grad Student</option>
              </MySelect>
              <br />
              <button type="submit" disabled={props.isSubmitting}>
                {props.isSubmitting ? (
                  <div className="loading">Singing Up</div>
                ) : (
                  <div>Sign Up</div>
                )}
              </button>
            </Form>
          </div>
        )}
      </Formik>
      <div className="supervisor-signup-container">
        <SuperVisorSignUp />
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <img src={logo} alt="logo"></img>
            <h1>Want to be a researcher?</h1>
            <p>
              Start journey with us where you will get guidelines and supervisor
              to work under
            </p>
            <button
              className="ghost"
              id="signUp"
              onClick={(e) => {
                setSignUpAsSupervisor(false);
                setStudentSingUp(true);
              }}
            >
              Sign Up
            </button>
            <h4>
              Have an account?<Link to="/login">Login</Link>
            </h4>
          </div>
          <div className="social-media-mobile-view">
            <SocialMedia />
          </div>
          <div className="overlay-panel overlay-right">
            <img src={logo} alt="logo"></img>
            <h1>Supervisor</h1>
            <p>Want to supervise some students?</p>
            <button
              className="ghost"
              id="signIn"
              onClick={(e) => {
                setSignUpAsSupervisor(true);
                setStudentSingUp(false);
              }}
            >
              Register as a Supervisor
            </button>
            <h4>
              Have an account?<Link to="/login">Login</Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
