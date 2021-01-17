import React from 'react';
import './sections.css';
import { Element } from 'react-scroll';
const Activities = () => {
  return (
    <Element name="Activities">
      <div className="width-seventy center section" id="activities">
        <h1 className="heading">Activities</h1>
        <div className="text-container">
          <ul>
            <li>
              <span role="img" aria-label="bullet">
                🔹
              </span>
              Sharing research-related resources (Books, Papers, Websites, etc.)
            </li>
            <li>
              <span role="img" aria-label="bullet">
                🔹
              </span>
              Conducting Online/Offline Training on Research and Higher Studies
              Guidelines 
            </li>
            <li>
              <span role="img" aria-label="bullet">
                🔹
              </span>
              Arranging Seminar, Workshop or Webinar 
            </li>
            <li>
              <span role="img" aria-label="bullet">
                🔹
              </span>
              Research Collaboration/Supervision, etc.
            </li>
            <li>
              <span role="img" aria-label="bullet">
                🔹
              </span>
              Arranging Internship opportunities for research enthusiast
              students
            </li>
          </ul>
        </div>
      </div>
    </Element>
  );
};

export default Activities;
