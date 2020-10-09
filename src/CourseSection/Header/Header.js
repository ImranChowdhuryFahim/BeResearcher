import React, { Component } from 'react'
import './Header.css'
import logo from './logo2.png'
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
                        <img src={logo} alt="logo" style={{ height: '45px', marginTop: '2px', marginLeft: '35px' }}></img>
                    </div>
                    <div className="ham">
                        <img src={ham} alt="hame" style={{ height: '45px', marginTop: '2px', marginLeft: '5px' }} onClick={this.props.toggole}></img>
                    </div>
                    <div className="ProgressBar" style={{ padding: '3.25px 13px 0px 0px' }}>
                        <div className="ProgressLabel" style={{ marginTop: '5px', fontSize: '13px', fontWeight: 'bold' }}>
                            <span style={{ color: '#31c984' }}>
                                {this.context.CurrentUserDetails.completed} complete
                       </span>
                        </div>
                        <div className="ProgressBarPercentile" >
                            <span style={{ width: this.context.CurrentUserDetails.completed }}>

                            </span>
                        </div>
                    </div>
                    <div className="Announcement" style={{ display: 'flex' }}>
                        <FontAwesomeIcon className="ans" icon={faBullhorn} size={'2x'} style={{ marginTop: '5px' }}></FontAwesomeIcon>
                        <span className="ans" style={{ paddingLeft: '5px', fontSize: '13px', marginTop: '15px' }}>Announcements</span>
                    </div>
                    <div className="UserDetails">
                        <div className="UserProfile" style={{ display: 'flex', alignItems: 'center' }}>
                            <FontAwesomeIcon icon={faUser} size={'2x'} style={{ marginTop: '5px' }}></FontAwesomeIcon>
                            <span style={{ paddingLeft: '5px', fontSize: '11px', marginTop: '10px' }}>{this.context.CurrentUserDetails.name}</span>

                        </div>
                        <div className="dropdown-content">
                            <a href="/dashboard">Dashboard</a>
                            <a href="/announcement">Announcements</a>
                            <a href="/logout">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Header.contextType = CourseContext
export default Header