import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import "./Mainwindow.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faTachometerAlt,faBookReader, faChalkboardTeacher, faNewspaper, faBlog,faCalendar, faUserTag, faBookmark,  faMailBulk, faBullhorn,faTimes}from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route,NavLink,Link,withRouter } from "react-router-dom";
import Dashboard from '../menues/Dashboard/Dashboard'
import Course from '../menues/Course/Course'



class Mainwindow extends Component {

  render() {
    
    return (
      <div className="admin-mainwindow">
        <Navbar></Navbar>

        
             
      </div>
    );
  }
}

export default withRouter(Mainwindow);
