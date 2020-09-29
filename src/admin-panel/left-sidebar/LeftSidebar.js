import React from "react";
import "./leftsidebar.css";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  const handleClick = (event) => {
    console.log(event.target);
  };
  return (
    <div className="left-sidebar">
      <nav onClick={handleClick}>
        <ul>
          <li className="list-item" role="button">
            <Link to="/admin/my-courses">My Courses</Link>
          </li>
          <li className="list-item" role="button">
            <Link to="/admin/review-assignment">Review Assignment</Link>
          </li>
          <li>
            <Link>Create</Link>
            <ul className="nested-list">
              <li>
                <Link to="/admin/create-assignment">Assignment</Link>
              </li>
              <li>
                <Link to="/admin/create-course">Course</Link>
              </li>
              <li>
                <Link to="/admin/create-announcement">Announcement</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LeftSideBar;
