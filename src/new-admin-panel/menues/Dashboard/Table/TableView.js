import React, { Component } from "react";
import "./TableView.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

class TableView extends Component {
  render() {
    return (
      <div className={"TableView"}>
        <table border="0" cellSpacing="0" cellPadding="0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Institute</th>
              <th>Email</th>
              {/* <th>Course</th> */}
              <th>Complete Percentange</th>
            </tr>
          </thead>
          <tbody>
            {this.props.studentList.map(( {name, institute, email }) => {
              return (
                <tr>
                  <td>{name}</td>
                  <td>{institute}</td>
                  <td><a href={`mailto:${email}`}>{email}</a></td>
                  {/* <td>Research Methodology</td> */}
                  <td>
                    <CircularProgressbar
                      value={50}
                      text={`${50}%`}
                      className={"size"}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableView;
