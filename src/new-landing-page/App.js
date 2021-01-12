import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import Slider from './Image-slider/ImageSlider';
import Background from './sections/Background';
import Mission from './sections/Mission';
import Vision from './sections/Vision';
import Activites from './sections/Activities';
import Footer from './footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="landingpage">
        <Navbar></Navbar>
        <Slider></Slider>
        <Background />
        <Mission />
        <Vision />
        <Activites />
        <Footer />
      </div>
    );
  }
}

export default App;
