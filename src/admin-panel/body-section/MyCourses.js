import React from "react";
import "./bodysection.css";

const courseContainer = {
  display: "flex",
  flexDirection: "row",
};

const card = {
  margin: "10px",
  padding: "30px",
  height: "100px",
  width: "200px",
  textAlign: "center",
  background: "peru",
  cursor: "pointer",
  fontSize: "1.3rem",
  borderRadius: "4px",
};

const MyCourses = () => {
  return (
    <div style={{ margin: "0 auto" }}>
      <h1>My Courses</h1>
      <div className="course-container" style={courseContainer}>
        <div className="card" style={card}>
          Be Researcher
        </div>
      </div>
      <div className="enrolled-student">
        <h1>Enrolled Students</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Institute</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Abdul Matin</td>
              <td>Chittagong University Of Engineering And Technology</td>
              <td>
                <a href="mailto:abdulmatincuercse17@gmail.com">
                  abdulmatincuercse17@gmail.com
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MyCourses;
