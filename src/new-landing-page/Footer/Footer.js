import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="landing_footer">
        <span style={{ display: 'flex', flexDirection: 'column' }}>
          <span>&copy; Be Researcher Bd 2020</span>
          <span> All rights reserved </span>
        </span>
      </div>
    );
  }
}

export default Footer;
