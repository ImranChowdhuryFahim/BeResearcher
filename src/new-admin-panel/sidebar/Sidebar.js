import React, { Component } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faBookReader,
  faChalkboardTeacher,
  faNewspaper,
  faBlog,
  faCalendar,
  faUserTag,
  faBookmark,
  faMailBulk,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    const activeStyle = {
      color: 'white',
      backgroundColor: 'black',
      borderLeft: '5px solid steelblue',
      zIndex: '-1',
      height: '100%',
      width: '100%',
    };
    return (
      <div className="admin-sidebar">
        <div className="admin-logo">Admin Panel</div>

        <div className="functionalities">
          <ul className="admin-menues">
            <li>
              {' '}
              <NavLink to="/admin/dashboard" activeStyle={activeStyle}>
                <FontAwesomeIcon icon={faTachometerAlt}></FontAwesomeIcon>{' '}
                Dashboard
              </NavLink>{' '}
            </li>
            <li>
              {' '}
              <NavLink to="/admin/courses" activeStyle={activeStyle}>
                <FontAwesomeIcon icon={faChalkboardTeacher}></FontAwesomeIcon>{' '}
                Course{' '}
              </NavLink>{' '}
            </li>

            <li>
              {' '}
              <NavLink to="/admin/events" activeStyle={activeStyle}>
                <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon> Events{' '}
              </NavLink>{' '}
            </li>
            <li>
              {' '}
              <NavLink to="/admin/blog" activeStyle={activeStyle}>
                <FontAwesomeIcon icon={faBlog}></FontAwesomeIcon> Blog{' '}
              </NavLink>{' '}
            </li>
            <li>
              {' '}
              <NavLink to="/admin/news" activeStyle={activeStyle}>
                <FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon> News{' '}
              </NavLink>{' '}
            </li>
            <li>
              {' '}
              <NavLink to="/admin/assignment" activeStyle={activeStyle}>
                {' '}
                <FontAwesomeIcon
                  icon={faBookmark}
                ></FontAwesomeIcon> Assignment{' '}
              </NavLink>{' '}
            </li>
            <li>
              {' '}
              <NavLink to="/admin/announcement" activeStyle={activeStyle}>
                <FontAwesomeIcon icon={faBullhorn}></FontAwesomeIcon>{' '}
                Announcement{' '}
              </NavLink>{' '}
            </li>
            <li>
              {' '}
              <NavLink to="/admin/access-role" activeStyle={activeStyle}>
                <FontAwesomeIcon icon={faUserTag}></FontAwesomeIcon> Access Role{' '}
              </NavLink>{' '}
            </li>
            <li>
              {' '}
              <NavLink to="/admin/mailbox" activeStyle={activeStyle}>
                <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon> MailBox{' '}
              </NavLink>{' '}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
