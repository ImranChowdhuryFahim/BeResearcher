import React , { Component } from 'react'
import './CourseContent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDotCircle , faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { CourseContext } from '../../../data'
import {withRouter} from 'react-router-dom'

class CourseContent extends Component{
    handleclick(event) {
        event.stopPropagation();
        this.context.UpdateCurrentContentDetails(this.props.coursedata)
        // this.props.history.push('/hello');
        // window.location.reload()
    }
    render()
    {
        return(
            <div className="CourseContent" onClick={this.handleclick.bind(this)}>
                 <span style={{ marginLeft: '5px', paddingRight: '10px' }}><FontAwesomeIcon icon={faDotCircle} color={'gray'}></FontAwesomeIcon></span>
                 <span style={{ fontSize: '13px' , color: this.props.active==='true'?'#00a4ea':'black' , fontWeight: this.props.active==='true'?'bold':'normal' }}>{this.props.txt}</span>
            </div>
        )
    }
}
CourseContent.contextType = CourseContext
export default withRouter(CourseContent)
