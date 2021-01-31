import React, { Component } from "react";
import "./Course.css";

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CourseContent: {
        1: [{ type: "lecture" }],
      },
      id: 0,
    };
  }
  handleCreateUnit() {
    let newContent = {};
    newContent[Object.keys(this.state.CourseContent).length + 1] = [
      { type: "lecture" },
    ];
    this.setState({
      CourseContent: Object.assign(this.state.CourseContent, newContent),
    });

    // console.log(this.state.CourseContent)
  }

  handleAddLecture(event) {
    let unit = event.target.getAttribute("data-key");
    let newContent = this.state.CourseContent;
    newContent[unit][newContent[unit].length] = {
      type: "lecture",
    };
    this.setState({ CourseContent: newContent });
  }
  handletitle(event) {
    //  console.log(event.target.value)
    let unit, id, rid;
    unit = event.target.getAttribute("data-unit");
    id = event.target.getAttribute("data-id");
    rid = event.target.getAttribute("data-rid");
    let newContent = this.state.CourseContent;
    newContent[unit][id]["id"] = parseInt(rid);
    newContent[unit][id]["unit"] = parseInt(unit);
    newContent[unit][id]["title"] = event.target.value;
    this.setState({ CourseContent: newContent });
    //console.log(this.state.CourseContent)
  }
  handlesource(event) {
    //  console.log(event.target.value)
    let unit, id, rid;
    unit = event.target.getAttribute("data-unit");
    id = event.target.getAttribute("data-id");
    rid = event.target.getAttribute("data-rid");
    let newContent = this.state.CourseContent;
    newContent[unit][id]["id"] = parseInt(rid);
    newContent[unit][id]["unit"] = parseInt(unit);
    newContent[unit][id]["src"] = event.target.value;
    this.setState({ CourseContent: newContent });
  }
  handleDescription(event) {
    let unit, id, rid;
    unit = event.target.getAttribute("data-unit");
    id = event.target.getAttribute("data-id");
    rid = event.target.getAttribute("data-rid");
    let newContent = this.state.CourseContent;
    newContent[unit][id]["id"] = parseInt(rid);
    newContent[unit][id]["unit"] = parseInt(unit);
    newContent[unit][id]["description"] = event.target.value;
    this.setState({ CourseContent: newContent });
    //  console.log(newContent)
  }
  handleQuestion(event) {
    let unit, id,ques_no,rid;
    unit = event.target.getAttribute("data-unit");
    id = event.target.getAttribute("data-id");
    ques_no = event.target.getAttribute("ques-no");
    rid = event.target.getAttribute("data-rid");
    let newContent = this.state.CourseContent;
    newContent[unit][id]["id"]=parseInt(rid);
    newContent[unit][id]["unit"] = parseInt(unit);
    newContent[unit][id]["questions"][parseInt(ques_no)]["question_no"]=parseInt(ques_no)+1;

    newContent[unit][id]["questions"][parseInt(ques_no)]["question"] = event.target.value;

    this.setState({ CourseContent: newContent });
  }
  handleOption(event) {
    let unit, id, rid, op,ques_no;
    unit = event.target.getAttribute("data-unit");
    id = event.target.getAttribute("data-id");
    rid = event.target.getAttribute("data-rid");
    op = event.target.getAttribute("data-option");
    ques_no = event.target.getAttribute("ques-no");
    let newContent = this.state.CourseContent;
    newContent[unit][id]["id"] = parseInt(rid);
    newContent[unit][id]["unit"] = parseInt(unit);
    newContent[unit][id]["questions"][parseInt(ques_no)]["option" + parseInt(op)] = event.target.value;
    this.setState({ CourseContent: newContent });
  }
  handleAnswer(event) {
    let unit, id, rid, ques_no;
    unit = event.target.getAttribute("data-unit");
    id = event.target.getAttribute("data-id");
    rid = event.target.getAttribute("data-rid");
    ques_no = event.target.getAttribute("ques-no");
    let newContent = this.state.CourseContent;
    newContent[unit][id]["id"] = parseInt(rid);
    newContent[unit][id]["unit"] = parseInt(unit);
    newContent[unit][id]["questions"][parseInt(ques_no)]["answer"] = event.target.value;
    this.setState({ CourseContent: newContent });
  }
  handleAddAssignment(event) {
    let unit = event.target.getAttribute("data-key");
    let newContent = this.state.CourseContent;
    newContent[unit][newContent[unit].length] = {
      type: "assignment",
    };
    this.setState({ CourseContent: newContent });
  }
  handleAddQuiz(event) {
    let unit = event.target.getAttribute("data-key");
    let newContent = this.state.CourseContent;
    newContent[unit][newContent[unit].length] = {
      unit: parseInt(unit),
      type: "quiz",
      questions: [{ question_no: 1 }],
    };
    this.setState({ CourseContent: newContent });
  }

  handleAddQuizQuestion(event)
  {
    let unit, id;
    unit = event.target.getAttribute("data-unit");
    id = event.target.getAttribute("data-id");
    let newContent = this.state.CourseContent;
    newContent[unit][id]["questions"][newContent[unit][id]["questions"].length] = {
      question_no: newContent[unit][id]["questions"].length,
    }
    this.setState({ CourseContent: newContent });
  }

  handleCreate() {
    console.log(this.state.CourseContent);
  }
  handledelete(event) {
    let unit, id;
    unit = event.target.getAttribute("data-unit");
    id = event.target.getAttribute("data-id");
    let newContent = this.state.CourseContent;
    newContent[unit].splice(id, 1);
    this.setState({ CourseContent: newContent });
    if (id > 0) {
      this.setState({ id: this.state.id - 1 });
    }
  }
  handlequesdelete(event)
  {
    let unit, id, ques_no;
    unit = event.target.getAttribute("data-unit");
    id = event.target.getAttribute("data-id");
    ques_no = event.target.getAttribute("ques-no");

    let newContent = this.state.CourseContent;
    newContent[unit][id]["questions"].splice(ques_no,1);
    this.setState({CourseContent: newContent});
  }
  handleDeleteUnit(event) {
    let unit;
    unit = event.target.getAttribute("data-unit");
    let newContent = this.state.CourseContent;
    delete newContent[unit];
    this.setState({ CourseContent: newContent });
  }
  render() {
    let id = this.state.id;
    let lec = 0;
    let assignment = 0;
    let quiz = 0;
    return (
      <div className={"create-course"}>
        <div>
          <h1 className={"heading_name"}>Course Title</h1>
          <input type="text" placeholder="e.g. Research Methodology"></input>
        </div>
        <div>
          <h1 className={"heading_name"}>Course Description</h1>
          <textarea placeholder="Short Description"></textarea>
        </div>
        <div>
          <h1 className={"heading_name"}>Course Curriculum</h1>
          <div className={"course-curriculumn"}>
            {Object.keys(this.state.CourseContent).map((unit) => {
              return (
                <div className={"unit-section"} key={unit}>
                  <span style={{ fontWeight: "bold" }}>Unit {unit}</span>

                  <div style={{ display: "flex" }}>
                    <button
                      type="submit"
                      data-key={unit}
                      onClick={this.handleAddLecture.bind(this)}
                      style={{
                        padding: "5px",
                        margin: "5px",
                        marginLeft: "10px",
                      }}
                    >
                      Add Lecture
                    </button>
                    <button
                      type="submit"
                      data-key={unit}
                      onClick={this.handleAddQuiz.bind(this)}
                      style={{
                        padding: "5px",
                        margin: "5px",
                        marginLeft: "10px",
                      }}
                    >
                      Add Quiz
                    </button>
                    <button
                      type="submit"
                      data-key={unit}
                      onClick={this.handleAddAssignment.bind(this)}
                      style={{
                        padding: "5px",
                        margin: "5px",
                        marginLeft: "10px",
                      }}
                    >
                      Add assignment
                    </button>
                  </div>
                  <div>
                    {this.state.CourseContent[unit].map((content, i) => {
                      id++;

                      // console.log(lecture)
                      if (content.type === "lecture") {
                        lec++;
                        return (
                          <div key={id} className={"sections"}>
                            <div style={{ paddingBottom: "5px" }}>
                              Lecture {lec}
                            </div>
                            <div style={{ padding: "5px", fontSize: "14px" }}>
                              <div>
                                Title{" "}
                                <input
                                  data-unit={unit}
                                  data-id={i}
                                  data-rid={id}
                                  onChange={this.handletitle.bind(this)}
                                  placeholder={"e.g. Introduction"}
                                  style={{
                                    marginBottom: "5px",
                                    padding: "6px",
                                    width: "100%",
                                  }}
                                ></input>
                              </div>
                              <div>
                                Source{" "}
                                <input
                                  data-unit={unit}
                                  data-id={i}
                                  data-rid={id}
                                  onChange={this.handlesource.bind(this)}
                                  placeholder={"Youtube Link"}
                                  style={{ padding: "6px", width: "100%" }}
                                ></input>
                              </div>
                            </div>
                            <button
                              data-unit={unit}
                              data-id={i}
                              onClick={this.handledelete.bind(this)}
                              style={{ marginTop: "5px", padding: "5px" }}
                            >
                              Delete
                            </button>
                          </div>
                        );
                      } else if (content.type === "assignment") {
                        assignment++;
                        return (
                          <div key={id} className={"sections"}>
                            <div style={{ paddingBottom: "5px" }}>
                              {" "}
                              Assignment {assignment}{" "}
                            </div>
                            <div style={{ padding: "5px", fontSize: "14px" }}>
                              <div>
                                Title{" "}
                                <input
                                  data-unit={unit}
                                  data-id={i}
                                  data-rid={id}
                                  onChange={this.handletitle.bind(this)}
                                  placeholder={"e.g. Assignment1"}
                                  style={{
                                    marginBottom: "5px",
                                    padding: "6px",
                                    width: "100%",
                                  }}
                                ></input>
                              </div>
                              <div>
                                {" "}
                                Description{" "}
                                <textarea
                                  data-unit={unit}
                                  data-id={i}
                                  data-rid={id}
                                  onChange={this.handleDescription.bind(this)}
                                  placeholder={"e.g. Assignment1"}
                                  style={{ padding: "5px", width: "100%" }}
                                ></textarea>
                              </div>
                            </div>
                            <button
                              data-unit={unit}
                              data-id={i}
                              onClick={this.handledelete.bind(this)}
                              style={{ marginTop: "5px", padding: "5px" }}
                            >
                              Delete
                            </button>
                          </div>
                        );
                      } else if (content.type === "quiz") {
                        quiz++;
                        let qn=0;
                        return (
                          <div key={id} className={"sections"}>
                            <div style={{ paddingBottom: "5px" }}>
                              {" "}
                              Quiz {quiz}{" "}
                            </div>
                            <button
                              data-unit={unit}
                              data-id={i}
                              onClick={this.handleAddQuizQuestion.bind(this)}
                              style={{
                                marginTop: "5px",
                                marginBottom: "5px",
                                padding: "5px",
                              }}
                            >
                              Add Question
                            </button>
                            {content["questions"].map((question, j) => {
                              qn++;
                              return (
                                <div key={qn} className={"questions"}>
                                  <div>
                                    <span>
                                      Question{" "}{qn}
                                      <input
                                        data-unit={unit}
                                        data-id={i}
                                        data-rid={id}
                                        data-no={quiz}
                                        ques-no={j}
                                        onChange={this.handleQuestion.bind(
                                          this
                                        )}
                                        placeholder={
                                          "e.g. What is the Capital of Bangladesh"
                                        }
                                        style={{
                                          padding: "6px",
                                          width: "100%",
                                        }}
                                      ></input>
                                    </span>
                                  </div>
                                  <div
                                    style={{
                                      display: "flex",
                                      gridGap: "10px",
                                      fontSize: "14px",
                                      paddingTop: "5px",
                                    }}
                                  >
                                    <span>
                                      Option 1
                                      <input
                                        data-unit={unit}
                                        data-id={i}
                                        data-rid={id}
                                        data-option={1}
                                        ques-no={j}
                                        onChange={this.handleOption.bind(this)}
                                        placeholder={"e.g. Dhaka"}
                                        style={{
                                          padding: "6px",
                                          width: "100%",
                                        }}
                                      ></input>
                                    </span>
                                    <span>
                                      Option 2
                                      <input
                                        data-unit={unit}
                                        data-id={i}
                                        data-rid={id}
                                        data-option={2}
                                        ques-no={j}
                                        onChange={this.handleOption.bind(this)}
                                        placeholder={"e.g. Chittagont"}
                                        style={{
                                          padding: "6px",
                                          width: "100%",
                                        }}
                                      ></input>
                                    </span>
                                  </div>
                                  <div
                                    style={{
                                      display: "flex",
                                      gridGap: "10px",
                                      fontSize: "14px",
                                      paddingTop: "5px",
                                    }}
                                  >
                                    <span>
                                      Option 3
                                      <input
                                        data-unit={unit}
                                        data-id={i}
                                        data-rid={id}
                                        data-option={3}
                                        ques-no={j}
                                        onChange={this.handleOption.bind(this)}
                                        placeholder={"e.g. Comilla"}
                                        style={{
                                          padding: "6px",
                                          width: "100%",
                                        }}
                                      ></input>
                                    </span>
                                    <span>
                                      Option 4
                                      <input
                                        data-unit={unit}
                                        data-id={i}
                                        data-rid={id}
                                        data-option={4}
                                        ques-no={j}
                                        onChange={this.handleOption.bind(this)}
                                        placeholder={"e.g. Barisal"}
                                        style={{
                                          padding: "6px",
                                          width: "100%",
                                        }}
                                      ></input>
                                    </span>
                                  </div>
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      paddingTop: "5px",
                                    }}
                                  >
                                    Correct Answer{" "}
                                    <input
                                      data-unit={unit}
                                      data-id={i}
                                      data-rid={id}
                                      ques-no={j}
                                      onChange={this.handleAnswer.bind(this)}
                                      placeholder={"e.g. Dhaka"}
                                      style={{ padding: "6px", width: "35%" }}
                                    ></input>
                                  </div>
                                  <button
                                    data-unit={unit}
                                    data-id={i}
                                    ques-no={j}
                                    onClick={this.handlequesdelete.bind(this)}
                                    style={{ marginTop: "5px", padding: "5px" }}
                                  >
                                    Delete
                                  </button>
                                </div>
                              );
                            })}

                            <button
                              data-unit={unit}
                              data-id={i}
                              onClick={this.handledelete.bind(this)}
                              style={{ marginTop: "5px", padding: "5px" }}
                            >
                              Delete
                            </button>
                          </div>
                        );
                      }
                    })}
                  </div>
                  <button
                    data-unit={unit}
                    onClick={this.handleDeleteUnit.bind(this)}
                    style={{ marginTop: "5px", padding: "5px" }}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
            <button
              onClick={this.handleCreateUnit.bind(this)}
              className={"create-unit-button"}
            >
              Create Unit
            </button>
          </div>
        </div>
        <input
          className={"create-course-button"}
          type="submit"
          onClick={this.handleCreate.bind(this)}
        ></input>
      </div>
    );
  }
}

export default Course;
