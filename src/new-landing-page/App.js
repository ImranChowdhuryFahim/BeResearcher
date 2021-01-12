import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Slider from './Image-slider/ImageSlider'
import Footer from './Footer/Footer'
import './App.css'

class App extends Component{
    render()
    {
        return(
            <div className="landingpage">
                <Navbar></Navbar>
                <Slider></Slider>
                <Footer></Footer>
            </div>
        )
    }
}

export default App