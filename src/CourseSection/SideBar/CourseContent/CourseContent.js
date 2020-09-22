import React , { Component } from 'react'
import './CourseContent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDotCircle , faCheckCircle } from '@fortawesome/free-solid-svg-icons'

class CourseContent extends Component{
    render()
    {
        return(
            <div className="CourseContent">
                 <span style={{ marginLeft: '5px', paddingRight: '10px' }}><FontAwesomeIcon icon={faDotCircle} color={'gray'}></FontAwesomeIcon></span>
                 <span style={{ fontSize: '13px' }}>{this.props.txt}</span>
            </div>
        )
    }
}

export default CourseContent
