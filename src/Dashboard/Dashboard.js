import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faUser } from "@fortawesome/free-solid-svg-icons";
import { CourseContext } from "../data";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/core";
import logo from "./flogo.png";
import Auth from "../Auth";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
    };
  }
  componentDidMount() {
    let localData = JSON.parse(localStorage.getItem("login"));
    if (localData && localData.login) {
      if (localData.adminauth) {
        Auth.adminAuthenticate();
      }
      axios
        .get(
          `https://beresearcherbd.herokuapp.com/api/course/getcoursedata/${"Research Methodology"}`
        )
        .then((res) => {
          this.context.UpdateTotalItem(res.data.totalItem);
        });
      axios({
        method: "GET",
        url: `https://beresearcherbd.herokuapp.com/api/student/getdetails`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          auth: localData.token,
        },
      }).then((res) => {
        if (res.data.length !== 0) {
          this.context.UpdateCurrentUserDetails({
            id: res.data._id,
            name: res.data.firstName + " " + res.data.lastName,
            email: res.data.email,
            receivedAnnouncementIds: res.data.recievedAnnouncementIds,
          });
          this.context.UpdatecurrentCourseProgress({
            _id: res.data.enrolledCourses[0]._id,
            title: res.data.enrolledCourses[0].title,
            completedItem: res.data.enrolledCourses[0].completedItem,
          });

          this.context.UpdateCurrentContentDetails(
            res.data.enrolledCourses[0].currentContentDetails
          );
        }
      });
    } else {
      this.setState({ redirect: true });
    }
  }
  render() {
    const { history } = this.props;
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
      <div className={"Dashboard"}>
        {this.context.CurrentUserDetails !== null &&
        this.context.currentCourseProgress !== null &&
        this.context.totalItem !== null &&
        this.context.CurrentContentDetails !== null ? (
          <div>
            <div className={"DashboardHeader"}>
              <div>
                {" "}
                <Link to="/home">
                  {" "}
                  <img
                    src={logo}
                    alt={"logo"}
                    style={{
                      height: "80px",
                      marginLeft: "10px",
                    }}
                  ></img>
                </Link>
              </div>
              <div className={"headerText"}><h1>Dashboard</h1></div>
              <div className={"DashboardUserDetails"}>
                <div className="UserDetails">
                  <div
                    className="UserProfile"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      size={"2x"}
                    ></FontAwesomeIcon>
                    <span
                      style={{
                        paddingLeft: "5px",
                        fontSize: "11px",
                      }}
                    >
                      {this.context.CurrentUserDetails.name}
                    </span>
                  </div>
                  <div className="dropdown-content">
                    <Link to="/announcement">Announcements</Link>

                    {Auth.getAdminAuth() ? (
                      <Link to="/admin/dashboard">Admin Panel</Link>
                    ) : (
                      ""
                    )}
                    <Link to="/logout">Logout</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={"courseContainer"}>
              <div className={"course"}>
                <div className={"course-info"}>
                  <h6>Course</h6>
                  <h2>Research Methodology</h2>
                  <Link to="/dashboard">
                    {" "}
                    View all chapters{" "}
                    <FontAwesomeIcon
                      icon={faChevronRight}
                    ></FontAwesomeIcon>{" "}
                  </Link>
                </div>

                <div className={"course-progress"}>
                  <div className={"progress-container"}>
                    <div data-percentage={"50px"} className={"progress"}>
                      <span
                        style={{
                          width:
                            (this.context.currentCourseProgress.completedItem /
                              this.context.totalItem) *
                              100 +
                            "%",
                        }}
                      ></span>
                      <div className={"progress-text"}>
                        {this.context.currentCourseProgress.completedItem}/
                        {this.context.totalItem} Items
                      </div>
                    </div>
                  </div>
                  <h6>Unit {this.context.CurrentContentDetails.unit}</h6>
                  <h2 style={{ fontSize: "14px" }}>
                    {this.context.CurrentContentDetails.title}
                  </h2>
                  <button
                    className={"btn"}
                    onClick={(e) => {
                      if (
                        parseInt(this.context.totalItem) >
                        parseInt(
                          this.context.currentCourseProgress.completedItem
                        )
                      ) {
                        history.push(
                          `/course/research-methodology/${
                            parseInt(
                              this.context.currentCourseProgress.completedItem
                            ) + 1
                          }`
                        );
                      } else {
                        history.push(
                          `/course/research-methodology/${parseInt(
                            this.context.currentCourseProgress.completedItem
                          )}`
                        );
                      }
                    }}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <BeatLoader
              css={loaderCss}
              loading
              size={"30"}
              color={"blue"}
            ></BeatLoader>
          </div>
        )}
      </div>
    );
  }
}

Dashboard.contextType = CourseContext;
export default Dashboard;
