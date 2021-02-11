import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Search , ArrowRight } from '@material-ui/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "./flogo.png";
import Auth from "../Auth";
import "./Course.css";

class Course extends Component {
  render() {
    let localData = JSON.parse(localStorage.getItem("login"));
    return (
      <div>
        <div className={"CourseNavbar"}>
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
          <div className={"headerText"}>
            <h1>Courses</h1>
          </div>
          <div className={"searchbar"} style={{ display: 'flex', alignItems: 'center', border:'1px solid black',borderRadius:'40px', paddingLeft: '5px', paddingRight:'5px' }}>
          <Search ></Search>
              <input type="text" placeholder="Search for anything" className={"searchtextinput"}></input>
            
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

                <div className={"course-progress"} style={{padding:'20px' , paddingTop:'10px'}}>
                  <p style={{padding:'5px',paddingLeft:'0px'}}>5 Units </p>
                  <p style={{padding:'5px',paddingLeft:'0px'}}>
                    24 Lectures
                  </p>
                  <p style={{padding:'5px',paddingLeft:'0px'}}>Conducted by: Md. Sabir Hossain | Md. Nurul Amin | Md. Rasidul Islam</p>
                  <button
                    className={"btn"}
                  >
                      {localData.login && ('Enrolled')}
                      {!localData.login && ('Enroll')}
                  </button>
                </div>
              </div>
            </div>
      </div>
    );
  }
}

export default Course;
