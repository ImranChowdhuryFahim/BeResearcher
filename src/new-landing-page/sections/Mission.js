import React from 'react';
import { Element } from 'react-scroll';

import './sections.css';
const Mission = () => {
  return (
    <Element name="Mission">
      <div className="width-seventy center section">
        <h1 className="heading">Mission</h1>
        <div className="text-container">
          <ul>
            <li>
              <span role="img" aria-label="bullet">
                🔹
              </span>
              Creating a research environment in Bangladesh where anybody can
              pursue research without any fear of the outcome.
            </li>
            <li>
              <span role="img" aria-label="bullet">
                🔹
              </span>
              To make prolific researchers contribute to sustainable
              development.
            </li>
            <li>
              <span role="img" aria-label="bullet">
                🔹
              </span>
              To develop collaboration between the researchers and enthusiasts.
            </li>
            <li>
              <span role="img" aria-label="bullet">
                🔹
              </span>
              To motivate the students for securing higher studies (Masters,
              PhD, Post-Doc).
            </li>
          </ul>
        </div>
      </div>
    </Element>
  );
};

export default Mission;
