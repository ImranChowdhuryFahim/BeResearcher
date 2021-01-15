import React from 'react';
import { Element } from 'react-scroll';
import './sections.css';
const Vision = () => {
  return (
    <Element name="Vision">
      <div className="width-seventy center section">
        <h1>Vision</h1>
        <div className="text-container">
          <ul>
            <li>
              <span role="img" aria-label="bullet">
                🔹
              </span>
              Leveraging research in Higher Educational Institutes for
              Sustainable Development .
            </li>
          </ul>
        </div>
      </div>
    </Element>
  );
};

export default Vision;
