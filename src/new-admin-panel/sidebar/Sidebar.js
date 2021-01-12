import React, { Component } from 'react'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faTachometerAlt,faBookReader, faChalkboardTeacher, faNewspaper, faBlog,faCalendar, faUserTag, faBookmark,  faMailBulk, faBullhorn} from '@fortawesome/free-solid-svg-icons'


class Sidebar extends Component{
    render()
    {
        return(
            <div className="admin-sidebar">
              <div className="admin-logo">
                  Admin Panel
              </div>

              <div className="functionalities">
                  <ul className="admin-menues">
                      <li> <FontAwesomeIcon icon={faTachometerAlt}></FontAwesomeIcon> Dashboard </li>
                      <li> <FontAwesomeIcon icon={faChalkboardTeacher}></FontAwesomeIcon> Course </li>
                      <li> <FontAwesomeIcon icon={faBookReader}></FontAwesomeIcon> Quiz </li>
                      <li> <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon> Assignment </li>
                      <li> <FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon> News </li>
                      <li> <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon> Events </li>
                      <li> <FontAwesomeIcon icon={faBlog}></FontAwesomeIcon> Blog </li>
                      <li> <FontAwesomeIcon icon={faBullhorn}></FontAwesomeIcon> Announcement </li>
                      <li> <FontAwesomeIcon icon={faUserTag}></FontAwesomeIcon> Access Role </li>
                      <li> <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon> MailBox </li>
                  </ul>
              </div>
            </div>
        )
    }
}

export default Sidebar