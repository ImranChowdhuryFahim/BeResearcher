import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import "./Mainwindow.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faTachometerAlt,faBookReader, faChalkboardTeacher, faNewspaper, faBlog,faCalendar, faUserTag, faBookmark,  faMailBulk, faBullhorn,faTimes}from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

class Mainwindow extends Component {
    state = { clicked: false };
  handleClick() {
    this.setState({ clicked: !this.state.clicked });
  }
  render() {
    return (
      <div className="admin-mainwindow">
        <Navbar></Navbar>
        <div className="admin-menu-icon" onClick={this.handleClick.bind(this)}>
                  <FontAwesomeIcon icon={this.state.clicked? faTimes :  faBars} style={{ position:"fixed", top:21 , left:20 }}></FontAwesomeIcon>
              </div>
              <div className={ this.state.clicked?"functionalities1":"functionalities1 active"}>
                  <ul className="admin-menues">
                      <li ><FontAwesomeIcon icon={faTachometerAlt}></FontAwesomeIcon></li>
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
    );
  }
}

export default Mainwindow;
