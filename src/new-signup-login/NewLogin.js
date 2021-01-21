import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Formik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

import Auth from './../Auth';

import flogo from './images/flogo.png';
import './newLogin.css';

const NewLogin = () => {
  const history = useHistory();
  return (
    <div className="login-container">
      <img className="login-logo" src={flogo} alt="beresearcherbd logo" />
      <h1
        style={{
          fontSize: '30px',
          letterSpacing: '2px',
          fontWeight: 'larger',
          textTransform: 'uppercase',
        }}
      >
        Login
      </h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);

          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 200);

          axios({
            method: 'POST',
            url: `https://beresearcherbd.herokuapp.com/api/student/login`,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            data: JSON.stringify({
              email: values.email,
              password: values.password,
            }),
          }).then((res) => {
            console.log('login', res);
            setSubmitting(false);

            if (res.data.length === 0) {
              alert('Wrong email or Password');
              window.location.reload();
            } else {
              Auth.authenticate();
              if (
                values.email === 'sabirndc08cuet10@gmail.com' ||
                values.email === 'abdulmatincuetcse17@gmail.com' ||
                values.email === 'imran.cuet.cse17@gmail.com' ||
                values.email === 'amanu092@gmail.com'
              ) {
                Auth.adminAuthenticate();
                localStorage.setItem(
                  'login',
                  JSON.stringify({
                    login: true,
                    adminauth: true,
                    token: res.data.token,
                  })
                );
              } else {
                localStorage.setItem(
                  'login',
                  JSON.stringify({
                    login: true,
                    adminauth: false,
                    token: res.data.token,
                  })
                );
              }
              history.push('/dashboard');
            }
          });
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
            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              LOGIN
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
        <Link to="/new-signup" style={{ color: 'peru' }}>
          Create an account
        </Link>
      </div>
    </div>
  );
};

export default NewLogin;
