import React from 'react';
import { Formik, Form, Field, useField } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import { Element } from 'react-scroll';
import { MyTextInput } from '../../../signup/SignUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import './contact.css';

const MyTextArea = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <textarea
        name={props.name}
        id=""
        cols="30"
        rows="10"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const Contact = () => {
  return (
    <Element name="contact" className="contact">
      <h1 className="text-align-center header-text">CONTACT</h1>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email').required('Required'),
          message: Yup.string()
            .min(20, 'Must be 20 characters or more')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          setTimeout(() => {
            alert(values.name);
            setSubmitting(false);
            toast.success('✅ Thanks for contacting us!', {
              position: 'top-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }, 5000);
        }}
      >
        {(props) => (
          <Form className="contact-form">
            <MyTextInput
              style={{ border: '2px solid black' }}
              name="name"
              type="text"
              placeholder="NAME"
            />
            <MyTextInput
              style={{ border: '2px solid black' }}
              name="email"
              type="email"
              placeholder="EMAIL"
            />
            <MyTextArea
              name="message"
              placeholder="MESSAGE"
              className="border text-area-input"
            />
            <button
              className="send-button"
              type="submit"
              disabled={props.isSubmitting}
            >
              <FontAwesomeIcon icon={faPaperPlane} size="large" />
              <div>SEND</div>
            </button>
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </Form>
        )}
      </Formik>
      <div className="social-media-icon-container">
        <ul className="social-media-icon-list">
          <hr />
          <br />
          <li className="list-item" style={{ margin: '4px' }}>
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </li>
          <li className="list-item" style={{ margin: '4px' }}>
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </li>

          <li className="list-item" style={{ margin: '4px' }}>
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </li>

          <li className="list-item" style={{ margin: '4px' }}>
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </li>
        </ul>
      </div>
    </Element>
  );
};

export default Contact;
