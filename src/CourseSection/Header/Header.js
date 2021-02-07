import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Header.css'
import logo from './flogo.png'
import ham from './ham.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBullhorn } from '@fortawesome/free-solid-svg-icons'
import { CourseContext } from '../../data'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            open: true
        }
    }
    render() {
        return (
            <div>
                <div className="CourseHeader">
                    <div className="LogoCourseSection">
                      <Link to="/home"> <img src={logo} alt="logo" style={{ height: '60px', marginLeft: '35px' }}></img></Link> 
                    </div>
                    <div className="ham">
                        <img src={ham} alt="hame" style={{ height: '45px', marginLeft: '5px' }} onClick={this.props.toggole}></img>
                    </div>
                    <div className="ProgressBar" style={{ padding: '3.25px 13px 0px 0px' }}>
                        <div className="ProgressLabel" style={{  fontSize: '13px', fontWeight: 'bold' }}>
                            <span style={{ color: '#31c984' }}>
                                {((this.context.currentCourseProgress.completedItem/this.context.totalItem)*100).toFixed(1) + '%'} complete
                       </span>
                        </div>
                        <div className="ProgressBarPercentile" >
                            <span style={{ width: (this.context.currentCourseProgress.completedItem/this.context.totalItem)*100 + '%' }}>

                            </span>
                        </div>
                    </div>
                    <div className="Announcement" style={{ display: 'flex' , alignItems:'center' }}>
                        <FontAwesomeIcon className="ans" icon={faBullhorn} size={"2x"} ></FontAwesomeIcon>
                        <span className="ans" style={{ paddingLeft: '5px', fontSize: '13px' }}>Announcements</span>
                    </div>
                    <div className="UserDetails">
                        <div className="UserProfile" style={{ display: 'flex', alignItems: 'center' }}>
                            <FontAwesomeIcon icon={faUser} size={"2x"}></FontAwesomeIcon>
                            <span style={{ paddingLeft: '5px', fontSize: '13px' }}>{this.context.CurrentUserDetails.name}</span>

                        </div>
                        <div className="dropdown-content">
                        <Link to="/dashboard">Dashboard</Link>
                <Link to="/announcement">Announcements</Link>
                <Link to="/logout">Logout</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Header.contextType = CourseContext
export default Header