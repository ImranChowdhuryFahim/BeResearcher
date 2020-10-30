import React from "react";
import "./bodysection.css";

import { CourseContext } from "../../data";
import { faThinkPeaks } from "@fortawesome/free-brands-svg-icons";

class CreateAssignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      unit: "",
      courseContent: {},
      courseTitle: "",
      isSubmitting: false,
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleUnitChange = this.handleUnitChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleBodyChange(event) {
    this.setState({ body: event.target.value });
  }
  handleUnitChange(event) {
    this.setState({ unit: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { title, body, unit, courseTitle } = this.state;
    const newCourseContent = this.state.courseContent;
    newCourseContent[unit].push({
      unit: Number(unit),
      title: title,
      description: body,
      type: "assignment",
    });
    this.setState({ isSubmitting: true });
    fetch("https://beresearcherbd.herokuapp.com/api/course/updatecontent", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        courseTitle: courseTitle,
        courseContent: newCourseContent,
      }),
    })
      .then(() => {
        alert("Assignment Suceesfully Created");
        this.setState({ title: "", body: "", unit: "", isSubmitting: false });
      })
      .catch(() => {
        alert("Oops, something went wrong. Try creating again.");
        this.setState({ title: "", body: "", unit: "", isSubmitting: false });
      });
    // this.context.updateAssignment(1);
  }

  componentDidMount() {
    fetch(
      "https://beresearcherbd.herokuapp.com/api/course/getcoursedata/Research%20Methodology"
    )
      .then((resp) => resp.json())
      .then((resp) => {
        this.setState(
          () => ({
            courseContent: resp.courseContent,
            courseTitle: resp.courseTitle,
          }),
          () => {
            window.courseContent = this.state.courseContent;
            window.courseTitle = this.state.courseTitle;
          }
        );
      });
  }

  render() {
    const { title, body, unit, isSubmitting } = this.state;
    return (
      <div className="create-assignment">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="unit">Select Unit</label>
          <select name="unit" id="unit" onChange={this.handleUnitChange}>
            <option value="">Choose a unit</option>
            {Object.keys(this.state.courseContent).map((_, i) => (
              <option>{i + 1}</option>
            ))}
          </select>
          <label htmlFor="title">
            Title:
            <input
              id="title"
              type="text"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </label>

          <label htmlFor="body">
            Body:
            <textarea
              name="body"
              id="body"
              value={this.state.body}
              onChange={this.handleBodyChange}
              rows="25"
              cols="30"
              placeholder="Describe the Assignment"
            />
          </label>

          <button
            type="submit"
            disabled={title === "" || body === "" || unit === ""}
          >
            {isSubmitting ? (
              <div className="loading">Creating</div>
            ) : (
              <div>Create</div>
            )}
          </button>
        </form>
      </div>
    );
  }
}

CreateAssignment.contextType = CourseContext;

export default CreateAssignment;
