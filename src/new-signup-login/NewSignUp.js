import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Formik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

import Auth from './../Auth';

import { institution, researchField } from './resources';
import flogo from './images/flogo.png';
import './newSignup.css';

const NewSignUp = () => {
  const history = useHistory();
  return (
    <div className="singup-container">
      <img className="singup-logo" src={flogo} alt="beresearcherbd logo" />
      <h1
        style={{
          fontSize: '30px',
          letterSpacing: '2px',
          fontWeight: 'larger',
          textTransform: 'uppercase',
        }}
      >
        Signup
      </h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          intstitution: '',
          researchField: 'select your research field',
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required('Required'),
          lastName: Yup.string().required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string().required('Required'),
          intstitution: Yup.string().required('Required'),
          researchField: Yup.string().oneOf(researchField).required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          //   fetch(
          //     'https://beresearcherbd.herokuapp.com/api/student/registration',
          //     {
          //       method: 'POST',
          //       headers: {
          //         'Content-Type': 'application/json',
          //       },
          //       body: JSON.stringify(values),
          //     }
          //   )
          //     .then((result) => {
          //       setSubmitting(false);
          //       history.push('/dashboard');
          //       return result.text();
          //     })
          //     .then((res) => console.log(res, 'bhaiaja'))
          //     .catch((err) => {
          //       alert(err);
          //       setSubmitting(false);
          //     });
          //   // await new Promise((r) => setTimeout(r, 500));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              placeholder="First Name"
            />
            <div className="error">
              {errors.firstName && touched.firstName && errors.firstName}
            </div>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              placeholder="Last Name"
            />
            <div className="error">
              {errors.lastName && touched.lastName && errors.lastName}
            </div>

            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="email"
            />
            <div className="error">
              {errors.email && touched.email && errors.email}
            </div>

            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="password"
            />
            <div className="error">
              {errors.password && touched.password && errors.password}
            </div>

            <input
              type="select"
              name="intstitution"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.intstitution}
              placeholder="intstitution"
              list="intstitution"
            />

            <div className="error">
              {errors.intstitution &&
                touched.intstitution &&
                errors.intstitution}
            </div>

            <datalist id="intstitution">
              {institution.map((elem) => (
                <option value={elem}>{elem}</option>
              ))}
            </datalist>

            <select
              name="researchField"
              id="research-field"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value={values.researchField}>
                {values.researchField}
              </option>
              {researchField.map((elem) => (
                <option value={elem}>{elem}</option>
              ))}
            </select>
            <div className="error">
              {errors.researchField &&
                touched.researchField &&
                errors.researchField}
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              SIGNUP
            </button>
          </form>
        )}
      </Formik>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Link to="/newhome" style={{ color: 'peru' }}>
          Back to Home
        </Link>
        <Link to="/new-login" style={{ color: 'peru' }}>
          Already have an account? Login
        </Link>
      </div>
    </div>
  );
};

export default NewSignUp;
