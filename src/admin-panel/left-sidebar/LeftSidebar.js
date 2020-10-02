import React from "react";
import "./leftsidebar.css";
import { Link, NavLink } from "react-router-dom";

const activeStyle = {
  color: "peru",
};

const LeftSideBar = () => {
  return (
    <div className="left-sidebar">
      <nav>
        <ul>
          <li className="list-item" role="button">
            <NavLink to="/admin/my-courses" activeStyle={activeStyle}>
              My Courses
            </NavLink>
          </li>
          <li className="list-item" role="button">
            <NavLink to="/admin/review-assignment" activeStyle={activeStyle}>
              Review Assignment
            </NavLink>
          </li>
          <li>
            <b>Create</b>
            <ul className="nested-list">
              <li>
                <NavLink
                  to="/admin/create-assignment"
                  activeStyle={activeStyle}
                >
                  Assignment
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/create-course" activeStyle={activeStyle}>
                  Course
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={activeStyle}
                  to="/admin/create-announcement"
                >
                  Announcement
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LeftSideBar;
