import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Slider from './Image-slider/ImageSlider'
import './App.css'

class App extends Component{
    render()
    {
        return(
            <div className="landingpage">
                <Navbar></Navbar>
                <Slider></Slider>
            </div>
        )
    }
}

export default App