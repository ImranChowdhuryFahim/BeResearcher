import React, { Component } from "react";
import "./Assignment.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const getSrc = (pdfUrl) =>
  `https://docs.google.com/gview?url=${pdfUrl}&embedded=true`;

const Details = (props) => {
  const { studentId, assignment } = props.match.params;
  useEffect(() => console.log(studentId, assignment));
  return (
    <div>
      <h2 className={'assignment-name'} >{assignment}</h2>
      <button
        id="new_tab"
        style={{ float: "right" }}
        onClick={() =>
          window.open(
            getSrc(
              `https://nodeapi.beresearcherbd.com/api/assignment/${studentId}/${assignment}`
            )
          )
        }
      >
        Open PDF in new Tab
      </button>
      <iframe
        src={getSrc(
          `https://nodeapi.beresearcherbd.com/api/assignment/${studentId}/${assignment}`
        )}
        title="Review Assignment PDF"
        frameborder="0"
        id="iframe"
        width="100%"
        className={'pdf-viewer'}
        
      ></iframe>
    </div>
  );
};

class Assignment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      students: null,
      assignments: {},
      show: false,
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://beresearcherbd.herokuapp.com/api/course/getcoursedata/Research%20Methodology"
      )
      .then((result) => {
        this.setState({ students: result.data.enrolledStudents });
        this.state.students.map((student) => {
          axios
            .get(
              `https://nodeapi.beresearcherbd.com/api/assignment/${student._id}`
            )
            .then((res) => {
              let n_assignment = this.state.assignments;
              n_assignment[student._id] = res.data;
              this.setState({ assignments: n_assignment });
              this.setState({ loading: false });
            });
        });
      });
  }
  render() {
    return (
      <BrowserRouter>
        <div className={"review_assignment"}>
          <h1>Review Assingments</h1>
          <div style={{ display: "flex" , height: '50vh'}}>
            <div
              style={{ width: "50%", marginRight: "5px", overflow:'auto', border:'1px solid black'}}
            >
              {this.state.loading ? (
                "Loading..."
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Submitted Assignments</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.students.map((student, i) => (
                      <tr key={i}>
                        <td>{i}</td>
                        <td>{student.name}</td>
                        <td>
                          <div
                            style={{
                              background: "gray",
                              textAlign: "center",
                              cursor: this.state.assignments[student._id]
                                ? "pointer"
                                : "none",
                              padding: "2px",
                              borderRadius: "5px",
                            }}
                            onClick={() => {
                              this.state.assignments[student._id]
                                ? this.setState({ show: !this.state.show })
                                : this.setState({ show: this.state.show });
                            }}
                          >
                            {this.state.show ? "Hide" : "See"}
                          </div>

                          {this.state.show === false ? (
                            ""
                          ) : (
                            <ol>
                              {this.state.assignments[student._id].map(
                                (element) => (
                                  <li key={element}>
                                    <Link
                                      to={`/admin/review-assignment/details/${student._id}/${element}`}
                                    >
                                      {element}
                                    </Link>
                                  </li>
                                )
                              )}
                            </ol>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            <div
              style={{
                width: "50%",
                marginLeft: "5px",
                border: "1px solid black",
              }}
            >
              <Route
                path="/admin/review-assignment/details/:studentId/:assignment"
                component={Details}
              />
            </div>
          </div>
          <div style={{ marginTop:'10px' }}>
            <form className="marks_comments">
              <input type="number" placeholder="Marks/points" />
              <textarea
                name="comment"
                placeholder="Comment/recommendation"
                id="comment"
                cols="50"
                rows="3"
              ></textarea>

              <input type="submit" />
            </form>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Assignment;
