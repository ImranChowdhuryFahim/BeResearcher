import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="landing_footer">
        <span style={{ display: 'flex', flexDirection: 'column' }}>
          <span>&copy; Be Researcher Bd 2021</span>
          <span> All rights reserved </span>
        </span>

        <span style={{ padding: '10px' }}>|</span>

        <span>Developed & maintained by : Brainfluence Limited.</span>

        <span style={{ padding: '10px' }}>|</span>

        <span>Supervised by : Md. Sabir hossain & Md amanullah</span>
      </div>
    );
  }
}

export default Footer;
