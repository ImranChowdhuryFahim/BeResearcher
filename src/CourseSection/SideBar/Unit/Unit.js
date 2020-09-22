import React, { Component } from 'react'
import './Unit.css'

class Unit extends Component{
    render()
    {
        return(
            <div className="unit">
                <span style={{ marginLeft: '20px' , color: '#3E3E3E' , fontSize: '17.5px' , fontWeight: 'bold' }}>{this.props.txt}</span>
            </div>
        )
    }
}

export default Unit