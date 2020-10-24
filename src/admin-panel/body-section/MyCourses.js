import React from "react";
import "./bodysection.css";
import { useEffect } from "react";
import { useState } from "react";

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
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://beresearcherbd.herokuapp.com/api/course/getcoursedata/Research%20Methodology"
    )
      .then((resp) => {
        console.log(resp);
        return resp.json();
      })
      .then(({ enrolledStudents }) => {
        setStudents(enrolledStudents);
        setLoading(false);
      })
      .catch((err) => alert(err));
  }, []);
  return (
    <div style={{ margin: "0 auto" }}>
      <h1>My Courses</h1>
      {loading ? "Loading..." : null}
      <div className="course-container" style={courseContainer}>
        <div className="card" style={card}>
          Research Methodology
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
            {students.map(({ name, institute, email }) => (
              <tr>
                <td>{name}</td>
                <td>{institute}</td>
                <td>
                  <a href={`mailto:${email}`}>{email}</a>
                </td>
              </tr>
            ))}
            {/* <tr>
              <td>Abdul Matin</td>
              <td>Chittagong University Of Engineering And Technology</td>
              <td>
                <a href="mailto:abdulmatincuercse17@gmail.com">
                  abdulmatincuercse17@gmail.com
                </a>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MyCourses;
