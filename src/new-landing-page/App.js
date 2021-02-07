import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import Slider from './Image-slider/ImageSlider';
import Background from './sections/Background';
import Mission from './sections/Mission';
import Vision from './sections/Vision';
import Activites from './sections/Activities';
import Contact from './sections/contact/Contact';

import Footer from './Footer/Footer';
import { Element } from 'react-scroll';
import Carousel from 'react-elastic-carousel'
import './App.css';
import img from './img2.jpg'
import ImageSlider from './Image-slider/ImageSlider';
import axios from 'axios'
import { BeatLoader } from 'react-spinners';
import { css } from '@emotion/core';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      user : null,
      loading: true,
    }
  }
  componentDidMount()
  {
    let localData = JSON.parse(localStorage.getItem('login'));
    if (localData && localData.login) {
      axios({
        method: 'GET',
        url: `https://beresearcherbd.herokuapp.com/api/student/getdetails`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          auth: localData.token,
        },
      }).then((result)=> {
        this.setState({user: result.data});
        this.setState({loading: false});
      })

    }
    else {
      this.setState({loading: false});
    }

    
  }
  render() {
    const loaderCss = css`
      height: 100vh;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    `;
    return (
      
      <div>
        {this.state.loading? (
          <div>
          <BeatLoader
            css={loaderCss}
            loading
            size={'30'}
            color={'blue'}
          ></BeatLoader>
        </div>
        ): (
        <div className="landingpage">
        <Navbar user={this.state.user}></Navbar>
        <ImageSlider></ImageSlider>
        <Element name="about">
          <Background />
          <Mission />
          <Vision />
          <Activites />
        </Element>
        <Contact />
        <Footer />
      </div>
      )}
      </div>
        
    );
  }
}

export default App;
