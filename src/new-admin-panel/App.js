import React, { Component } from "react";
import Navbar from "./navbar/Navbar";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTachometerAlt,
  faChalkboardTeacher,
  faNewspaper,
  faBlog,
  faCalendar,
  faUserTag,
  faBookmark,
  faMailBulk,
  faBullhorn,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import routes from "./Routes";
import "./App.css";

class App extends Component {
  state = { clicked: false };
  handleClick() {
    this.setState({ clicked: !this.state.clicked });
  }
  render() {
    const activeStyle = {
      color: "white",
      backgroundColor: "black",
      borderLeft: "5px solid steelblue",
      zIndex: "-1",
      height: "100%",
      width: "100%",
    };
    return (
      <div >
        <div style={{ position:'fixed', width:'100%'}} >
          <Navbar></Navbar>
        </div>

        <BrowserRouter>
          <div style={{ display: "flex" }}>
            <div style={{ zIndex:'1000'}}>
              <Sidebar />
            </div>
            <div className="admin-mainwindow">
              <div
                className="admin-menu-icon"
                onClick={this.handleClick.bind(this)}
              >
                <FontAwesomeIcon
                  icon={this.state.clicked ? faTimes : faBars}
                  style={{ position: "fixed", top: 21, left: 20 }}
                ></FontAwesomeIcon>
              </div>

              <div
                className={
                  this.state.clicked
                    ? "functionalities1"
                    : "functionalities1 active"
                }
              >
                <ul
                  className="admin-menues"
                  onClick={this.handleClick.bind(this)}
                >
                  <li>
                    {" "}
                    <NavLink to="/admin/dashboard" activeStyle={activeStyle}>
                      <FontAwesomeIcon icon={faTachometerAlt}></FontAwesomeIcon>{" "}
                      Dashboard
                    </NavLink>{" "}
                  </li>
                  <li>
                    {" "}
                    <NavLink to="/admin/courses" activeStyle={activeStyle}>
                      <FontAwesomeIcon
                        icon={faChalkboardTeacher}
                      ></FontAwesomeIcon>{" "}
                      Courses{" "}
                    </NavLink>{" "}
                  </li>
                  <li>
                    {" "}
                    <NavLink to="/admin/events" activeStyle={activeStyle}>
                      <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>{" "}
                      Events{" "}
                    </NavLink>{" "}
                  </li>
                  <li>
                    {" "}
                    <NavLink to="/admin/blog" activeStyle={activeStyle}>
                      <FontAwesomeIcon icon={faBlog}></FontAwesomeIcon> Blog{" "}
                    </NavLink>{" "}
                  </li>
                  <li>
                    {" "}
                    <NavLink to="/admin/news" activeStyle={activeStyle}>
                      <FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon>{" "}
                      News{" "}
                    </NavLink>{" "}
                  </li>
                  <li>
                    {" "}
                    <NavLink to="/admin/assignment" activeStyle={activeStyle}>
                      {" "}
                      <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>{" "}
                      Assignment{" "}
                    </NavLink>{" "}
                  </li>
                  <li>
                    {" "}
                    <NavLink to="/admin/announcement" activeStyle={activeStyle}>
                      <FontAwesomeIcon icon={faBullhorn}></FontAwesomeIcon>{" "}
                      Announcement{" "}
                    </NavLink>{" "}
                  </li>
                  <li>
                    {" "}
                    <NavLink to="/admin/access-role" activeStyle={activeStyle}>
                      <FontAwesomeIcon icon={faUserTag}></FontAwesomeIcon>{" "}
                      Access Role{" "}
                    </NavLink>{" "}
                  </li>
                  <li>
                    {" "}
                    <NavLink to="/admin/mailbox" activeStyle={activeStyle}>
                      <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon>{" "}
                      MailBox{" "}
                    </NavLink>{" "}
                  </li>
                </ul>
              </div>
              <div className={"loaded_component"}>
                <Switch>
                  {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      children={<route.body />}
                    />
                  ))}
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
