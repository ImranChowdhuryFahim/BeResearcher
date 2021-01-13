import React from 'react';
import './sections.css';
import { Element } from 'react-scroll';
const Activities = () => {
  return (
    <Element name="Activities">
      <div className="width-seventy center section" id="activities">
        <h1 className="text-align-center">Activities</h1>
        <div className="text-container">
          <ul>
            <li>
              🔹Sharing research-related resources (Books, Papers, Websites,
              etc.)
            </li>
            <li>
              🔹Conducting Online/Offline Training on Research and Higher
              Studies Guidelines [4-6]
            </li>
            <li>🔹Arranging Seminar, Workshop or Webinar [7-9]</li>
            <li>🔹Research Collaboration/Supervision, etc.</li>
            <li>
              🔹Arranging Internship opportunities for research enthusiast
              students
            </li>
          </ul>
        </div>
      </div>
    </Element>
  );
};

export default Activities;
