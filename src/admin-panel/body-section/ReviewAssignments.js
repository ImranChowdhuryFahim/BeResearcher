import React, { useState } from "react";
import "./bodysection.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { useEffect } from "react";
// const URL =
//   "https://beresearcherbd.com/api/assignment/5f8f2e9b8fd9050024d0aa24/%D9%85%D9%83%D8%AA%D8%A8%D8%A9%20%D9%86%D9%88%D8%B1%20%D9%85%D9%83%D8%A7%D9%86%D8%A9%20%D8%A7%D9%84%D8%A5%D9%85%D8%A7%D9%85%20%D8%A3%D8%A8%D9%8A%20%D8%AD%D9%86%D9%8A%D9%81%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB.pdf";
// // ("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf");
// const src = `https://docs.google.com/gview?url=${URL}&embedded=true`;

const getSrc = (pdfUrl) =>
  `https://docs.google.com/gview?url=${pdfUrl}&embedded=true`;

const Details = (props) => {
  const { studentId, assignment } = props.match.params;
  useEffect(() => console.log(studentId, assignment));
  return (
    <div>
      <h2 style={{ display: "inline" }}>{assignment}</h2>
      <button
        style={{ float: "right" }}
        onClick={() =>
          window.open(
            getSrc(
              `https://beresearcherbd.com/api/assignment/${studentId}/${assignment}`
            )
          )
        }
      >
        Open PDF in new Tab
      </button>
      <iframe
        src={getSrc(
          `https://beresearcherbd.com/api/assignment/${studentId}/${assignment}`
        )}
        title="Review Assignment PDF"
        frameborder="0"
        style={{ width: "100%", height: "700px", margin: "2px" }}
      ></iframe>
      <form>
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
  );
};

const ReviewAssignments = () => {
  const [students, setStudents] = useState([]);
  const [assignments, setAssingments] = useState({});
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.assignments = assignments;
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
        enrolledStudents.forEach((element) => {
          fetch(`https://beresearcherbd.com/api/assignment/${element._id}`, {
            mode: "cors",
          })
            .then((resp) => resp.json())
            .then((resp) => {
              setAssingments((prev) => {
                console.log(prev, resp);
                return Object.assign(prev, { [element._id]: resp });
              });
              console.log(resp);
            });
        });
        setLoading(false);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <BrowserRouter>
      <div className="review-assignment">
        <div>
          <h1>Review Assingments</h1>
          {loading ? "Loading..." : null}
          {/* {students.map((student) => (
            <pre>{JSON.stringify(student, null, 2)}</pre>
          ))}
          <pre>{JSON.stringify(assignments, null, 2)}</pre> */}

          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Submitted Assignments</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, i) => (
                <tr>
                  <td>{i}</td>
                  <td>{student.name}</td>
                  <td>
                    <div
                      style={{
                        background: "gray",
                        textAlign: "center",
                        cursor: "pointer",
                        padding: "2px",
                        borderRadius: "5px",
                      }}
                      onClick={() => setShow(!show)}
                    >
                      {show ? "Hide" : "See"}
                    </div>

                    {show === false ? (
                      "na"
                    ) : (
                      <ol>
                        {assignments[student._id].map((element) => (
                          <li>
                            <Link
                              to={`/admin/review-assignment/details/${student._id}/${element}`}
                            >
                              {element}
                            </Link>
                          </li>
                        ))}
                      </ol>
                    )}
                  </td>
                </tr>
              ))}
              {/* <tr>
                <td>1</td>
                <td>Mark</td>
                <td>
                  <table>
                    <tr>
                      <a href="">ja</a>
                    </tr>
                    <tr>no</tr>
                    <tr>no</tr>
                    <Link to="/admin/review-assignment/ken">SO</Link>
                  </table>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
        <Route
          path="/admin/review-assignment/details/:studentId/:assignment"
          component={Details}
        />
      </div>
    </BrowserRouter>
  );
};
export default ReviewAssignments;
