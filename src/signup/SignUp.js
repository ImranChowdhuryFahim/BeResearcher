import React from "react";
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import logo from "./logo.png";
import "./style.css";
import { useState } from "react";

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
        initialValues={{ firstName: "", lastName: "", email: "" }}
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
          <h2>Supervisor SignUp</h2>
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Abdul"
          />
          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Matin"
          />
          <MyTextInput
            label="Password"
            name="password"
            type="password"
            placeholder="********"
          />

          <MyTextInput
            label="Email"
            name="email"
            type="email"
            placeholder="abdulmatin@gmail.com"
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
  const [signUpAsSupervisor, setSignUpAsSupervisor] = useState(false);
  return (
    <div
      className={
        signUpAsSupervisor ? "container right-panel-active" : "container"
      }
    >
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
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
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values);
          await new Promise((r) => setTimeout(r, 500));
          setSubmitting(false);
        }}
      >
        <div className="student-signup-container">
          <Form>
            <h2>Student SignUp</h2>
            <MyTextInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Abdul"
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Matin"
            />
            <MyTextInput
              label="Password"
              name="password"
              type="password"
              placeholder="********"
            />
            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="abdulmatin@gmail.com"
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
            <button type="submit">Submit</button>
          </Form>
        </div>
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
              onClick={(e) => setSignUpAsSupervisor(false)}
            >
              Sign Up
            </button>
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
              }}
            >
              Register as a Supervisor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
