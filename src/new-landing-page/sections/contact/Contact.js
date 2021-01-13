import React from 'react';
import { Formik, Form, Field } from 'formik';
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
const Contact = () => {
  return (
    <Element name="contact" className="contact">
      <h1 className="text-align-center">CONTACT</h1>
      <Formik initialValues={{ name: '', email: '', message: '' }}>
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
            <Field
              name="firstName"
              className="border text-area-input"
              component="textarea"
              placeholder="MESSAGE"
            />
            <button className="send-button">
              <FontAwesomeIcon icon={faPaperPlane} size="large" />
              <div>SEND</div>
            </button>
          </Form>
        )}
      </Formik>

      <div className="social-media-icon-container">
        <ul className="social-media-icon-list">
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
