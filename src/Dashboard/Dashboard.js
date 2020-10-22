import React, { Component } from "react";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faUser } from "@fortawesome/free-solid-svg-icons";
import { CourseContext } from "../data";
import logo from "./logo2.png";

class Dashboard extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <div className={"DashboardHeader"}>
          <div>
            {" "}
            <img
              src={logo}
              alt={"logo"}
              style={{ marginTop: "5px", height: "50px", marginLeft: "10px" }}
            ></img>
          </div>
          <div className={"DashboardUserDetails"}>
            <div className="UserDetails">
              <div
                className="UserProfile"
                style={{ display: "flex", alignItems: "center" }}
              >
                <FontAwesomeIcon
                  icon={faUser}
                  size={"2x"}
                  style={{ marginTop: "5px" }}
                ></FontAwesomeIcon>
                <span
                  style={{
                    paddingLeft: "5px",
                    fontSize: "11px",
                    marginTop: "10px",
                  }}
                >
                  {this.context.CurrentUserDetails.name}
                </span>
              </div>
              <div className="dropdown-content">
                <a href="/dashboard">Dashboard</a>
                <a href="/announcement">Announcements</a>
                <a href="/logout">Logout</a>
              </div>
            </div>
          </div>
        </div>
        <div className={"courseContainer"}>
          <div className={"course"}>
            <div className={"course-info"}>
              <h6>Course</h6>
              <h2>Research Methodology</h2>
              <a href="#">
                {" "}
                View all chapters{" "}
                <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>{" "}
              </a>
            </div>

            <div className={"course-progress"}>
              <div className={"progress-container"}>
                <div data-percentage={"50px"} className={"progress"}>
                  <span
                    style={{
                      width:
                        (this.context.currentCourseProgress.completedItem /
                          this.context.totalItem) *
                        100,
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
                  history.push(
                    `/course/research-methodology/${
                      parseInt(
                        this.context.currentCourseProgress.completedItem
                      ) + 1
                    }`
                  );
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.contextType = CourseContext;
export default Dashboard;
