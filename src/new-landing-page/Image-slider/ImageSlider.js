import React, { Component } from 'react'
import './ImageSlider.css'
import {Images} from './Images'



class ImageSlider extends Component{
    constructor(props)
    {
        super(props)
        this.state={currentimage: 0}
        this.makeTimer()
    }

    makeTimer(){ 
        setInterval(() => { 

            if(this.state.currentimage< (Images.length-1)){
                this.setState({currentimage: this.state.currentimage+1}) 
                
            }
            else{
                this.setState({currentimage: 0}) 
            }
            console.log(this.state.currentimage)
            
        }, 10000) 
      } 
    render()
    {
        return(
            <div className="ImageSlider">

      <img  className="SliderImages" src={Images[this.state.currentimage].url} alt="janina" />

                
            </div>
        )
    }
}

export default ImageSlider