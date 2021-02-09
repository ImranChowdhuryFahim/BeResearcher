import React, { Component } from "react";
import Navbar from "./navbar/Navbar";
import { BrowserRouter, Switch, Route, NavLink , Redirect } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/core";
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
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      user: null,
      loading: true,
      redirect: false,
    };
  }

  componentDidMount() {
    let localData = JSON.parse(localStorage.getItem("login"));
    if (localData && localData.login) {
      axios({
        method: "GET",
        url: `https://beresearcherbd.herokuapp.com/api/student/getdetails`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          auth: localData.token,
        },
      }).then((result) => {
        this.setState({ user: result.data });
        this.setState({ loading: false });
      });
    } else {
      this.setState({ redirect: true });
      this.setState({ loading: false });
    }
  }
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
    const loaderCss = css`
      height: 100vh;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    `;
    if (this.state.redirect) {
      return <Redirect to="/login"></Redirect>;
    }
    return (
      <div>
        {this.state.loading ? (
          <div>
            <BeatLoader
              css={loaderCss}
              loading
              size={"30"}
              color={"blue"}
            ></BeatLoader>
          </div>
        ) : (
          <>
            <div style={{ position: "fixed", width: "100%" }}>
              <Navbar user={this.state.user}></Navbar>
            </div>

            <BrowserRouter>
              <div style={{ display: "flex" }}>
                <div style={{ zIndex: "1000" }}>
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
                        <NavLink
                          to="/admin/dashboard"
                          activeStyle={activeStyle}
                        >
                          <FontAwesomeIcon
                            icon={faTachometerAlt}
                          ></FontAwesomeIcon>{" "}
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
                        <NavLink
                          to="/admin/assignment"
                          activeStyle={activeStyle}
                        >
                          {" "}
                          <FontAwesomeIcon
                            icon={faBookmark}
                          ></FontAwesomeIcon>{" "}
                          Assignment{" "}
                        </NavLink>{" "}
                      </li>
                      <li>
                        {" "}
                        <NavLink
                          to="/admin/announcement"
                          activeStyle={activeStyle}
                        >
                          <FontAwesomeIcon icon={faBullhorn}></FontAwesomeIcon>{" "}
                          Announcement{" "}
                        </NavLink>{" "}
                      </li>
                      <li>
                        {" "}
                        <NavLink
                          to="/admin/access-role"
                          activeStyle={activeStyle}
                        >
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
          </>
        )}
      </div>
    );
  }
}

export default App;
